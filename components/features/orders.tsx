"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {  ChevronDown, MoreHorizontal, Upload, Download, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 47,
    status: "published",
    name: "Casual Sunglass",
    category : "Sunglass",
    stock: 124,
    image:"/images/png-transparent-sunglasses-goggles-sunglasses-glass-angle-text-thumbnail.png"
  },
  {
    id: "3u1reuv4",
    amount: 47,
    status: "published",
    name: "T-Shirt",
    category : "Clothes",
    stock: 124,
    image: "/images/png-clipart-t-shirt-denim-jeans-sleeve-women-s-jeans-blue-women-accessories-thumbnail.png",
  },
  {
    id: "derv1ws0",
    amount: 47,
    status: "draft list",
    name: "Green Tea",
    category : "Beauty",
    stock: 0,
    image: "/images/png-clipart-matcha-green-tea-sencha-gyokuro-green-tea-matcha-green-tea-thumbnail.png",
  },
  {
    id: "5kma53ae",
    amount: 47,
    status: "inactive",
    name: "Denim Shirt",
    category : "Clothes",
    stock: 124,
    image: "/images/png-clipart-t-shirt-denim-jeans-sleeve-women-s-jeans-blue-women-accessories-thumbnail.png",
  },
  {
    id: "bhqecj4p",
    amount: 47,
    status: "stock out",
    name: "Casual Jacket",
    category : "Clothes",
    stock: 0,
    image: "/images/purple-jacket-made-basic-denim-isolated-transparent-background_191095-22717.avif",
  },
  {
    id: "bhqecj4p",
    amount: 47,
    status: "published",
    name: "Caps",
    category : "Cap",
    stock: 22,
    image: "/images/png-transparent-baseball-cap-hat-swim-caps-baseball-cap-hat-black-clothing-accessories-thumbnail.png",
  },
  {
    id: "bhqecj4p",
    amount: 47,
    status: "inactive",
    name: "Nike Sneakers",
    category : "Shoes",
    stock: 22,
    image: "/images/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png",
  },
  {
    id: "bhqecj4p",
    amount: 47,
    status: "stock out",
    name: "Cooling Fan",
    category : "Electronic",
    stock: 22,
    image: "/images/images.jpeg",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "published" | "draft list" | "inactive" | "stock out"
  name: string
  category: string
  stock: number
  image: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => {
      const product = row.original;
  
      return (
        <div className="flex items-center gap-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className="capitalize">{product.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div className="capitalize">{row.getValue("category")}</div>,
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number
      
      return (
        <div className="flex items-center gap-2">
          <span>{stock}</span>
          {stock === 0 ? (
            <span className=" text-red-500 font-bold px-2 py-1 text-xs ">
              Out of Stock
            </span>
          ) : stock <= 124 ? (
            <span className="  font-bold px-2 py-1 text-xs text-yellow-500">
              Low Stock
            </span>
          ) : null}
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
 
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-center font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("status")
      const getStatusStyle = (status: string) => {
        switch (status) {
          case "published":
            return "bg-green-100 text-green-800 hover:bg-green-200"
          case "draft list":
            return "bg-gray-100 text-gray-800 hover:bg-gray-200"
          case "inactive":
            return "bg-red-100 text-red-800 hover:bg-red-200"
          case "stock out":
            return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
          default:
            return ""
        }
      }
  
      return (
        <Button
          variant="ghost"
          className={`rounded-full gap-1 capitalize ${getStatusStyle(status as string)}`}
          size="sm"
        >
          {status as string}
          <ChevronDown className="h-4 w-4" />
        </Button>
      )
    },
  },
 
  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Orders() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-end  w-full">
        <h1 className="flex items-center py-4 justify-between w-full font-bold text-2xl">Product List</h1>

        <div className="flex space-x-3 ml-auto mt-2 mb-2">
        <Button variant="outline">
    <Upload className="w-4 h-4 mr-2" />
    Import
  </Button>

  {/* Export Button */}
  <Button variant="outline">
    <Download className="w-4 h-4 mr-2" />
    Export
  </Button>

  {/* Add Product Button (Purple) */}
  <Button className="bg-purple-600 text-white hover:bg-purple-700">
    <Plus className="w-4 h-4 mr-2" />
    Add Product
  </Button>
        </div>
      

      </div>

      
      <div className="flex items-center py-4">
        <Input
          placeholder="Search"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}

        <div className="flex items-center py-4 justify-end  w-full">
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="ml-2">
      Status <ChevronDown />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("published")}>
      Published
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("draft list")}>
      Draft List
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("inactive")}>
      Inactive
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("status")?.setFilterValue("stock out")}>
      Stock Out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="ml-2">
      Category <ChevronDown />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => table.getColumn("category")?.setFilterValue("Sunglass")}>
      Sunglass
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("category")?.setFilterValue("Clothes")}>
      Clothes
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("category")?.setFilterValue("Beauty")}>
      Beauty
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("category")?.setFilterValue("Cap")}>
      Cap
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("category")?.setFilterValue("Shoes")}>
      Shoes
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => table.getColumn("category")?.setFilterValue("Electronic")}>
      Electronic
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="ml-2">
        Filters <ChevronDown />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => console.log("Filter: In Stock")}>
        In Stock
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Filter: Out of Stock")}>
        Out of Stock
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => console.log("Filter: Processing")}>
        Processing
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
        </div>
       
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-gray-50">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
          
        </div>
      </div>
    </div>
  )
}
