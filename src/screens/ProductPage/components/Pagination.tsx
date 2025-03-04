'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
    const pageNumbers = Array.from({ length: Math.min(4, totalPages) }, (_, index) => {
        const page = Math.min(currentPage - (currentPage % 4) + index + 1, totalPages);
        return page;
    });

    return (
        <div className="flex justify-center mt-6 space-x-2">
            {/* Nút Previous */}
            <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => onPageChange(1)}
                className="flex items-center gap-2"
            >
                <ChevronLeft size={16} />
                Previous
            </Button>

            {/* Hiển thị số trang */}
            {pageNumbers.map((page) => (
                <Button
                    key={page}
                    variant="outline"
                    onClick={() => onPageChange(page)}
                    className={cn(
                        "px-4 py-2 rounded-md transition-colors",
                        currentPage === page
                            ? "bg-gray-900 text-white font-bold"  // Khi được chọn
                            : "bg-white text-gray-900 hover:bg-gray-200" // Khi chưa chọn
                    )}
                >
                    {page}
                </Button>
            ))}

            {/* Nút End */}
            <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(totalPages)}
                className="flex items-center gap-2"
            >
                End
                <ChevronRight size={16} />
            </Button>
        </div>
    );
}
