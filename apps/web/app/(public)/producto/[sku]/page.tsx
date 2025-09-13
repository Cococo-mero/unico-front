interface Props {
  params: { sku: string };
}

export default function ProductPage({ params }: Props) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Producto: {params.sku}</h1>
    </main>
  );
}
