import CategoryForm from "@/components/forms/category-form";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { prisma } from "@/prisma/db";
import { PlusIcon } from "@radix-ui/react-icons";


const CreateCategory = async () => {
    const prodcat = await prisma.productCategory.findMany();

  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={'secondary'}>
                Add category
                <PlusIcon className="ml-1" />
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>

                <CategoryForm />
                {JSON.stringify(prodcat)}
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default CreateCategory