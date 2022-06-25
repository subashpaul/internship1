import React from 'react'
export default function ListItem() {
    return (

        <>
            <ul className="list-group list-group-flush mt-4 listitem">
                <li className="list-group-item my-4 text-center items current">
                    <div className="d-flex align-items-center">
                        <span class="material-symbols-outlined me-2">
                            menu
                        </span>Menu
                    </div>
                </li>
                <li className="list-group-item my-4 text-center items">
                    <div className="d-flex">
                        <span class="material-symbols-outlined me-2">
                            menu_book
                        </span>
                        Specials
                    </div>
                </li>
                <li className="list-group-item my-4 text-center items">
                    <div className="d-flex">
                        <span class="material-symbols-outlined me-2">
                            pin_drop
                        </span>
                        Location
                    </div>
                </li>
                <li className="list-group-item my-4 text-center items">
                    <div className="d-flex">
                        <span class="material-symbols-outlined me-2">
                            call
                        </span>
                        Contact us
                    </div>
                </li>
            </ul>
        </>
    )
}
