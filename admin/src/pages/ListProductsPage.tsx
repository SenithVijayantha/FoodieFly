import { useEffect, useState } from "react";
import axios from "axios";
import { CirclePlus, Loader2, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/format";
import type { ApiResponse, PageProps, Product } from "@/types";

const ListProductsPage = ({ backendUrl }: PageProps) => {
  const [foodList, setFoodList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchList = async () => {
    try {
      const response = await axios.get<ApiResponse<Product[]>>(
        `${backendUrl}/api/food/list`
      );
      // console.log(response.data.data);

      if (response.data.success) {
        setFoodList(response.data.data ?? []);
      } else {
        console.error("API Error:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Failed to fetch data:",
        axios.isAxiosError(error) && error.response
          ? error.response.data
          : error instanceof Error
            ? error.message
            : error
      );
      toast.error("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const removeFoodItem = async (foodItemId: string) => {
    setDeletingId(foodItemId);
    try {
      const response = await axios.delete<ApiResponse>(
        `${backendUrl}/api/food/remove`,
        {
          data: { id: foodItemId },
        }
      );
      await fetchList(); // trigger an UI update
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Failed to remove item:",
        axios.isAxiosError(error) && error.response
          ? error.response.data
          : error instanceof Error
            ? error.message
            : error
      );
      toast.error("Failed to remove product. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const renderBody = () => {
    if (isLoading) {
      return Array.from({ length: 5 }, (_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton className="size-14 rounded-md" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-4 w-40" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-20" />
          </TableCell>
          <TableCell>
            <Skeleton className="ml-auto h-4 w-14" />
          </TableCell>
          <TableCell />
        </TableRow>
      ));
    }

    return foodList.map((item) => (
      <TableRow key={item._id}>
        <TableCell>
          <img
            src={`${backendUrl}/images/${item.image}`}
            alt={item.name}
            loading="lazy"
            className="size-14 rounded-md object-cover"
          />
        </TableCell>
        <TableCell className="font-medium">{item.name}</TableCell>
        <TableCell>
          <Badge variant="secondary">{item.category}</Badge>
        </TableCell>
        <TableCell className="text-right tabular-nums">
          {formatPrice(item.price)}
        </TableCell>
        <TableCell className="text-right">
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label={`Delete ${item.name}`}
                  disabled={deletingId === item._id}
                />
              }
            >
              {deletingId === item._id ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Trash2 />
              )}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete {item.name}?</AlertDialogTitle>
                <AlertDialogDescription>
                  This removes the product from the menu. This cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  variant="destructive"
                  onClick={() => removeFoodItem(item._id)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </TableCell>
      </TableRow>
    ));
  };

  const hasItems = isLoading || foodList.length > 0;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Products"
        description={
          isLoading
            ? undefined
            : `${foodList.length} ${foodList.length === 1 ? "item" : "items"} on the menu`
        }
        actions={
          <Button render={<Link to="/add" />}>
            <CirclePlus />
            Add product
          </Button>
        }
      />

      {hasItems ? (
        <Card className="gap-0 overflow-hidden py-0">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-24">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="w-16">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderBody()}</TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <Card className="items-center py-12 text-center">
          <CardContent className="flex flex-col items-center gap-4">
            <div className="space-y-1">
              <p className="font-medium">No products yet</p>
              <p className="text-sm text-muted-foreground">
                Add your first dish to start taking orders.
              </p>
            </div>
            <Button render={<Link to="/add" />}>
              <CirclePlus />
              Add product
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ListProductsPage;
