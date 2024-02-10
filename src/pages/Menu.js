import MenuList from "./MenuList";

function Menu() {
    return (
        <section className="menu">
                <div className="menu-header">
                    <h2>This week's specials!</h2>
                    <button>Order Menu</button>
                </div>
                <div className="menulist">
                    {MenuList.map(MenuList => <div key={MenuList.id} className="menu-items">
                        <img src={MenuList.image} alt={MenuList.description} width="400px"/>
                        <div className="menulist-content">
                            <div className="menulist-heading">
                                <h3>{MenuList.title}</h3>
                                <p>{MenuList.price}</p>
                            </div>
                            <div >
                                <p>{MenuList.description}</p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>)}
                </div>
        </section>
    )
}
export default Menu;