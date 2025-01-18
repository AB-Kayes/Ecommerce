import { db } from "@/db/db";
import { PageHeader } from "../../../_component/PageHeader";
import { ProductForm } from "../../_component/ProductForm";

export default async function NewProductsPage({params: {id}}: {params: {id: string}}) {

    const product = await db.product.findUnique({where: {id}});
    return<>
        <PageHeader>Edit Product</PageHeader>
        <ProductForm product = {product}/>
    </>
}