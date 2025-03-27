interface CategoryProps {
    params: {
        category: string;
    }
}


export default async function Category(props: CategoryProps) {
  
    const { category } = await props.params;

    console.log(category);
  
    return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
}
