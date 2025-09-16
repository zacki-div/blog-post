import { Link } from 'react-router-dom'

function CategoryItem({name, href, backgroundColor, color}) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color,
    }
    return (
        <div>
            <Link to={href} className='rounded-full'>
            <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}

function CategoryList() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="breakfast" href="/categories/breakfast" backgroundColor="#efedfa" color="#3c3a8f" />
            <CategoryItem name="lunch" href="/categories/lunch" backgroundColor="#e5f7f3" color="#1f8787" />
            <CategoryItem name="desserts" href="/categories/desserts" backgroundColor="#e8f5fa" color="#397a9e" />
            <CategoryItem name="drinks" href="/categories/drinks" backgroundColor="#ffeae3" color="#f0493e" />
        </div>
    )
}

function CategoryWrapper() {
  return (
    <div>
        <CategoryList/>
    </div>
  )
}

export default CategoryWrapper