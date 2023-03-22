import NavItem from "./navItem"
export default function Sidebar() {
    return (
        <aside className="w-1/8 md:w-1/6 lg:w-1/5 xl:w-1/4 zen-hide hidden sm:flex justify-end xl:me-4 relative">
            <div className="sticky top-0 w-20 xl:w-100 h-screen flex flex-col">
                <div className="max-w-full h-full flex flex-col justify-between overflow-x-hidden overflow-y-auto">
                    <div className="py-4">饭否</div>
                    <nav className="h-full flex flex-col shrink gap-2 mt-1 md:text-base sm:px-3">
                        <div className="relative group lg:ms-1 xl:block">
                            <div className="h-10"></div>
                        </div>
                        <div className="shrink hidden sm:block mt-2"></div>
                        <NavItem to="#" icon="i-ri:home-5-line" text="主页"/>
                        {/* <a href="#">
                            <div className="flex items-center w-fit px-2 py-2 mx-3 xl:ml-0 xl:mr-5 xl:px-5 xl:w-auto gap-4">
                                <div className="icon i-ri:home-5-line"></div>
                                <span>主页</span>
                            </div>
                        </a> */}
                    </nav>
                </div>
            </div>
            
        </aside>
    )
}
