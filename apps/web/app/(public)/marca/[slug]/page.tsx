interface Props {
  params: { slug: string };
}

export default function BrandPage({ params }: Props) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Marca: {params.slug}</h1>
    </main>
  );
}
