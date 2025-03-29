interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default function Category(props: CategoryProps){
  //throw new Error("Error en la categoria dinámica")
  return(
    <h1>Categoria dinámica</h1>
  )
}