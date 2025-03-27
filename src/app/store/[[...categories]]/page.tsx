interface CategoryProps {
    params: {
        categories: string[];
        searchParams?: string 
    }
}


export default async function Category(props: CategoryProps) {
  
    const { categories } = await props.params;

    console.log(categories);
  
    return (
    <div>
      <h1>Category: {categories}</h1>
    </div>
  );
}
