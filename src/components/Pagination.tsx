import {
    Pagination,
    PaginationContent,
    // PaginationEllipsis,
    PaginationItem,
    // PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "./ui/button"

export function PaginationComponent({ pageNum, totalPage }: { pageNum: number, totalPage: number }) {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className="bg-transparent border-0 hover:text-gray-500 text-white hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none cursor-pointer">
                        <Button
                            variant="outline"
                            size="sm"
                            // onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            // disabled={page === 1}
                            className="bg-transparent border-0 hover:text-gray-500 text-white hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
                        >
                            Previous
                        </Button>
                    </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                    <span className="text-sm text-muted-foreground">
                        {pageNum} /{totalPage}
                    </span>
                    {/* <PaginationLink href="#">1</PaginationLink> */}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="bg-transparent border-0 hover:text-gray-500 text-white hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none cursor-pointer">
                        <Button
                            variant="outline"
                            size="sm"
                            // disabled
                            className="bg-transparent border-0 hover:text-gray-500 text-white hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
                        // onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        // disabled={page === totalPages}
                        >
                            Next
                        </Button>
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
