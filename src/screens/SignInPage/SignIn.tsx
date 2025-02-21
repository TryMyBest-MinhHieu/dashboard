'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from 'next/link';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { IEmail, IPassword, ILogoSignIn, IFacebook, IGoogle, IApple, IEye, IEyeOff } from "@/assets";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

interface IFormInput {
    email: string;
    password: string;
}

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[\W_]/, "Password must contain at least one special character"),
})

type FormSchema = z.infer<typeof formSchema>;

const SignInPage = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = form;
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(values: IFormInput) {
        setLoading(true);
        setErrorMessage(""); 

        try {
            const response = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Đăng nhập thất bại");
            }

            // Lưu token vào sessionStorage
            sessionStorage.setItem("token", data.data.token);
            sessionStorage.setItem("user", JSON.stringify(data.data.account));

            console.log("Đăng nhập thành công!", data);

            router.push("/");
        } catch (error: any) {
            setErrorMessage(error.message || "Đã xảy ra lỗi");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                {/* Logo */}
                <div className={styles.logo}>
                    <ILogoSignIn className={styles.logoIcon} />
                </div>

                <h2 className={styles.title}>Sign in with email</h2>
                <p className={styles.subtitle}>Make a new doc to bring your words, data, and teams together. For free</p>

                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        {/* Email Input */}
                        <div className={styles.inputGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className={styles.inputField}
                                    placeholder="Enter your email"
                                />
                                <IEmail className={styles.inputIcon} />
                            </div>
                            {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div className={styles.inputGroup}>
                            <div className={styles.inputWrapper}>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password")}
                                    className={styles.inputField}
                                    placeholder="Enter your password"
                                />
                                <IPassword className={styles.inputIcon} />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className={styles.passwordToggle}
                                >
                                    {showPassword ? <IEyeOff /> : <IEye />}
                                </button>
                            </div>
                            {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}
                        </div>

                        {/* Hiển thị lỗi khi đăng nhập thất bại */}
                        {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}

                        {/* Forgot Password */}
                        <Link href="/" className={styles.forgotPassword}>Forgot password?</Link>

                        <Button type="submit" className={styles.submitButton} disabled={loading}>
                            {loading ? "Loading..." : "Get Started"}
                        </Button>
                    </form>
                </Form>

                {/* Separator */}
                <div className={styles.separator}>
                    <hr className={styles.separatorLine} />
                    <span className={styles.separatorText}>Or sign in with</span>
                    <hr className={styles.separatorLine} />
                </div>

                {/* Social Buttons */}
                <div className={styles.socialButtons}>
                    <Link href="https://www.google.com" className={styles.socialButton}>
                        <IGoogle className={styles.socialIcon} />
                    </Link>
                    <Link href="https://www.google.com" className={styles.socialButton}>
                        <IFacebook className={styles.socialIcon} />
                    </Link>
                    <Link href="https://www.google.com" className={styles.socialButton}>
                        <IApple className={styles.socialIcon} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;