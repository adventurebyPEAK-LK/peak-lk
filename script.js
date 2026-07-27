// =====================================================
// GEAR DATA
// =====================================================

const gear = [

{
    name: "Camping Tents",
    category: "camping",
    type: "category",

    image: "https://images.unsplash.com/photo-1785079605765-e125ec0cdb3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    items: [

        {
            name: "4 Person Tent (Automatic / Manual)",

            image: "https://images.unsplash.com/photo-1785094221698-3ae8ab84d658?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: {
                manual: 1000,
                automatic: 1200
            },

            buyPrice: {
                manual: 15000,
                automatic: 28000
            }
        },

        {
            name: "5 Person Tent (Manual)",

            image: "https://images.unsplash.com/photo-1785094221700-c0606e7d3db4?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 1300,
            buyPrice: 32000
        },

        {
            name: "6 Person Tent (Automatic)",

            image: "https://images.unsplash.com/photo-1785094221730-ac1a31764aa6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 1500,
            buyPrice: 38000
        },

        {
            name: "Decathlon Quechua 2-3 Person",

            image: "https://images.unsplash.com/photo-1785094221869-63a76da9c367?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 1500,
            buyPrice: 42900
        },

        {
            name: "Decathlon Quechua 3-4 Person",

            image: "https://images.unsplash.com/photo-1785094222048-b2b666220350?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaGVufDB8fHx8fA%3D%3D",

            rentPrice: 2400,
            buyPrice: 55000
        },

        {
            name: "Coleman 6-7 Person",

            image: "https://images.unsplash.com/photo-1785094221829-f6f85ce569a8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaGVufDB8fHx8fA%3D%3D",

            rentPrice: 1800,
            buyPrice: 22300
        }

    ]
},

{
    name: "Sleeping Gear",
    category: "sleeping",
    type: "category",

    image: "https://images.unsplash.com/photo-1784839288582-9ac718e422ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG9zdG9wZW4%3D",

    items: [

        {
            name: "Tent Mattress",

            image: "https://images.unsplash.com/photo-1785094222035-a435de234da5?q=80&w=845&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 300,
            buyPrice: 5700
        },

        {
            name: "Sleeping Bag",

            image: "https://images.unsplash.com/photo-1785094222042-23d06cf98897?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 350,
            buyPrice: 11500
        }

    ]
},

{
    name: "Cooking Equipment",
    category: "cooking",
    type: "category",

    image: "https://images.unsplash.com/photo-1784837891663-1073fa2e6774?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    items: [

        {
            name: "BBQ Grill Small (with tongs)",

            image: "https://images.unsplash.com/photo-1785094221740-550dcccc9f6e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 500,
            buyPrice: 6000
        },

        {
            name: "BBQ Grill Large (with tongs)",

            image: "https://images.unsplash.com/photo-1785094221765-8d21728253b1?q=80&w=931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 950,
            buyPrice: 11600
        },

        {
            name: "BBQ Charcoal 1kg",

            image: "https://images.unsplash.com/photo-1785094221729-a86ab81604ad?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            buyPrice: 300
        },

        {
            name: "Wind Proof Gas Stove",

            image: "https://images.unsplash.com/photo-1785094222072-2a809d81494d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 500,
            buyPrice: 4500
        },

        {
            name: "Butane Gas Canister",

            image: "https://images.unsplash.com/photo-1785094221780-bcd6a5f3f4f8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            buyPrice: 1000
        },

        {
            name: "Cooking Pot / Kettle / Pan",

            image: "https://images.unsplash.com/photo-1785094221833-366ba227f7d0?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 200,
            buyPrice: 5800
        },

        {
            name: "Knife & Cutting Board",

            image: "https://images.unsplash.com/photo-1785094221913-f52f12d487a9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 100,
            buyPrice: 2200
        },

        {
            name: "Plates / Cups / Cutlery",

            image: "https://images.unsplash.com/photo-1785094221837-17adf08ebaf1?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 20,
            buyPrice: 550
        }

    ]
},

{
    name: "Lighting Equipment",
    category: "lighting",
    type: "category",

    image: "https://images.unsplash.com/photo-1784838276193-ea10359c3c60?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    items: [

        {
            name: "Rechargeable Lamp",

            image: "https://images.unsplash.com/photo-1785094222072-dee887314209?q=80&w=496&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 300,
            buyPrice: 5200
        },

        {
            name: "Torch",

            image: "https://images.unsplash.com/photo-1785094222031-2c9ce2477b34?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 300,
            buyPrice: 2400
        },

        {
            name: "Head Torch",

            image: "https://images.unsplash.com/photo-1785094222439-97676647ecd2?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 250,
            buyPrice: 1500
        },

        {
            name: "Kerosene Oil Lantern",

            image: "https://images.unsplash.com/photo-1785094221997-63f891c19d3d?q=80&w=538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 350,
            buyPrice: 3800
        }

    ]
},

{
    name: "Furniture",
    category: "furniture",
    type: "category",

    image: "https://images.unsplash.com/photo-1784838276223-d34984becb1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fGVufDB8fHx8fA%3D%3D",

    items: [

        {
            name: "Camping Chair Large",

            image: "https://images.unsplash.com/photo-1785094221820-c97f49c3fc71?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fGVufDB8fHx8fA%3D%3D",

            rentPrice: 400,
            buyPrice: 9500
        },

        {
            name: "Camping Chair Small",

            image: "https://images.unsplash.com/photo-1785094221786-2313fe98a272?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 300,
            buyPrice: 4200
        },

        {
            name: "Foldable Stool",

            image: "https://images.unsplash.com/photo-1785094221964-890f382ae974?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 250,
            buyPrice: 3700
        },

        {
            name: "Foldable Table",

            image: "https://images.unsplash.com/photo-1785094221964-b0fe1f913bea?q=80&w=945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fGVufDB8fHx8fA%3D%3D",

            rentPrice: 500,
            buyPrice: 11200
        }

    ]
},

{
    name: "Hiking Accessories",
    category: "hiking",
    type: "category",

    image: "https://images.unsplash.com/photo-1784838276177-327a16fc5443?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    items: [

        {
            name: "Backpack 60L",

            image: "https://images.unsplash.com/photo-1785094221708-9c84c46c4e0e?q=80&w=632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 450,
            buyPrice: 7200
        },

        {
            name: "Hiking Stick",

            image: "https://images.unsplash.com/photo-1785094222455-194e9529be47?q=80&w=510&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 500,
            buyPrice: 2000
        },

        {
            name: "Leech Socks",

            image: "https://images.unsplash.com/photo-1785094222048-359df8bece27?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 250,
            buyPrice: 1000
        },

        {
            name: "Leech Repellent Spray",

            image: "https://images.unsplash.com/photo-1785094221991-604e28547105?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            buyPrice: {
                "30ml": 300,
                "50ml": 500
            },

            buyType: "size"
        }

    ]
},

{
    name: "Other Accessories",
    category: "other",
    type: "category",

    image: "https://images.unsplash.com/photo-1784838276169-7401d6381a9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wb3Blbi5jb20%3D",

    items: [

        {
            name: "Hammock",

            image: "https://images.unsplash.com/photo-1785094221989-60b189e03b94?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 400,
            buyPrice: 7200
        },

        {
            name: "Bluetooth Speaker",

            image: "https://images.unsplash.com/photo-1785094221764-dacc7fda132c?q=80&w=631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 250,
            buyPrice: 4000
        },

        {
            name: "Bongo Drum",

            image: "https://images.unsplash.com/photo-1785094221801-447217000ea7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 300,
            buyPrice: 12700
        },

        {
            name: "Power Bank (10000mAh)",

            image: "https://images.unsplash.com/photo-1785094222001-75735983966b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            buyPrice: 4000
        },

        {
            name: "Power Bank (20000mAh)",

            image: "https://images.unsplash.com/photo-1785094222013-dafc6516f7b3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            buyPrice: 7000
        },

        {
            name: "Gas Torch / Flame Gun",

            image: "https://images.unsplash.com/photo-1785094221977-7e9604ac5c66?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            rentPrice: 500,
            buyPrice: 3800
        }

    ]
}

];


// =====================================================
// ELEMENTS
// =====================================================

const grid = document.getElementById("gearGrid");

const modal = document.getElementById("bookingModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");


// =====================================================
// CART
// =====================================================

let cart = [];


// =====================================================
// SHOW MAIN CATEGORIES
// =====================================================

function renderGear(filter = "all") {

    const data = gear.filter(item => {

        return filter === "all" ||
               item.category === filter;

    });


    grid.innerHTML = data.map(item => `

        <article
            class="gear-card"
            onclick="openCategory('${item.name}')">

            <div
                class="gear-img"
                style="background-image:url('${item.image}')">
            </div>


            <div class="gear-info">

                <small>
                    ${item.category}
                </small>


                <h3>
                    ${item.name}
                </h3>


                <div class="gear-bottom">

                    <span class="price">
                        View Items →
                    </span>

                </div>

            </div>

        </article>

    `).join("");

}


// =====================================================
// INITIAL RENDER
// =====================================================

renderGear();


// =====================================================
// OPEN CATEGORY ITEMS
// =====================================================

function openCategory(categoryName) {

    const category = gear.find(
        item => item.name === categoryName
    );


    if (!category || !category.items) return;


    const categoryIndex = gear.indexOf(category);


    grid.innerHTML = `

        <button
            class="filter active"
            onclick="renderGear('all')">

            ← Back

        </button>

    `;


    grid.innerHTML += category.items.map((item, itemIndex) => {

        // =====================================================
        // SPECIAL ITEM: 4 PERSON TENT
        // =====================================================

        if (item.name === "4 Person Tent (Automatic / Manual)") {

            return `

                <article class="gear-card">

                    <div
                        class="gear-img"
                        style="background-image:url('${item.image || category.image}')">
                    </div>


                    <div class="gear-info">

                        <small>
                            ${category.name}
                        </small>


                        <h3>
                            ${item.name}
                        </h3>


                        <div class="gear-bottom">

                            <div class="price">

                                <!-- MANUAL -->
                                <div class="option-row">

                                    <div class="option-info">

                                        <b>Manual</b>

                                        <div>
                                            Rent:
                                            Rs. ${item.rentPrice.manual.toLocaleString()}
                                            <small>/ DAY</small>
                                        </div>

                                        <div>
                                            Buy:
                                            Rs. ${item.buyPrice.manual.toLocaleString()}
                                        </div>

                                    </div>


                                    <div class="item-buttons">

                                        <button
                                            class="buy-btn"
                                            onclick="
                                                event.stopPropagation();
                                                addRentToCart(
                                                    ${categoryIndex},
                                                    ${itemIndex},
                                                    'manual'
                                                )
                                            ">

                                            Rent 🛒

                                        </button>


                                        <button
                                            class="buy-btn"
                                            onclick="
                                                event.stopPropagation();
                                                addBuyToCart(
                                                    ${categoryIndex},
                                                    ${itemIndex},
                                                    'manual'
                                                )
                                            ">

                                            Buy 🛒

                                        </button>

                                    </div>

                                </div>


                                <!-- AUTOMATIC -->
                                <div class="option-row">

                                    <div class="option-info">

                                        <b>Automatic</b>

                                        <div>
                                            Rent:
                                            Rs. ${item.rentPrice.automatic.toLocaleString()}
                                            <small>/ DAY</small>
                                        </div>

                                        <div>
                                            Buy:
                                            Rs. ${item.buyPrice.automatic.toLocaleString()}
                                        </div>

                                    </div>


                                    <div class="item-buttons">

                                        <button
                                            class="buy-btn"
                                            onclick="
                                                event.stopPropagation();
                                                addRentToCart(
                                                    ${categoryIndex},
                                                    ${itemIndex},
                                                    'automatic'
                                                )
                                            ">

                                            Rent 🛒

                                        </button>


                                        <button
                                            class="buy-btn"
                                            onclick="
                                                event.stopPropagation();
                                                addBuyToCart(
                                                    ${categoryIndex},
                                                    ${itemIndex},
                                                    'automatic'
                                                )
                                            ">

                                            Buy 🛒

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </article>

            `;

        }


        // =====================================================
        // SPECIAL ITEM: LEECH REPELLENT SPRAY
        // =====================================================

        if (item.name === "Leech Repellent Spray") {

            return `

                <article class="gear-card">

                    <div
                        class="gear-img"
                        style="background-image:url('${item.image || category.image}')">
                    </div>


                    <div class="gear-info">

                        <small>
                            ${category.name}
                        </small>


                        <h3>
                            ${item.name}
                        </h3>


                        <div class="gear-bottom">

                            <div class="price">

                                <!-- 30ML -->
                                <div class="option-row">

                                    <div class="option-info">

                                        <b>30ml</b>

                                        <div>
                                            Buy:
                                            Rs. ${item.buyPrice["30ml"].toLocaleString()}
                                        </div>

                                    </div>


                                    <div class="item-buttons">

                                        <button
                                            class="buy-btn"
                                            onclick="
                                                event.stopPropagation();
                                                addBuyToCart(
                                                    ${categoryIndex},
                                                    ${itemIndex},
                                                    '30ml'
                                                )
                                            ">

                                            Buy 🛒

                                        </button>

                                    </div>

                                </div>


                                <!-- 50ML -->
                                <div class="option-row">

                                    <div class="option-info">

                                        <b>50ml</b>

                                        <div>
                                            Buy:
                                            Rs. ${item.buyPrice["50ml"].toLocaleString()}
                                        </div>

                                    </div>


                                    <div class="item-buttons">

                                        <button
                                            class="buy-btn"
                                            onclick="
                                                event.stopPropagation();
                                                addBuyToCart(
                                                    ${categoryIndex},
                                                    ${itemIndex},
                                                    '50ml'
                                                )
                                            ">

                                            Buy 🛒

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </article>

            `;

        }


        // =====================================================
        // NORMAL ITEMS
        // =====================================================

        let rentHTML = "";
        let buyHTML = "";


        // RENT PRICE
        if (item.rentPrice) {

            rentHTML = `

                <div>
                    <b>Rent:</b>
                    Rs. ${item.rentPrice.toLocaleString()}
                    <small>/ DAY</small>
                </div>

            `;

        }


        // BUY PRICE
        if (item.buyPrice) {

            buyHTML = `

                <div>
                    <b>Buy:</b>
                    Rs. ${item.buyPrice.toLocaleString()}
                </div>

            `;

        }


        return `

            <article class="gear-card">

                <div
                    class="gear-img"
                    style="background-image:url('${item.image || category.image}')">
                </div>


                <div class="gear-info">

                    <small>
                        ${category.name}
                    </small>


                    <h3>
                        ${item.name}
                    </h3>


                    <div class="gear-bottom">

                        <div class="price">

                            ${rentHTML}

                            ${buyHTML}

                        </div>


                        <div class="item-buttons">


                            ${
                                item.rentPrice

                                ? `

                                    <button
                                        class="buy-btn"
                                        onclick="
                                            event.stopPropagation();
                                            addRentToCart(
                                                ${categoryIndex},
                                                ${itemIndex}
                                            )
                                        ">

                                        Rent 🛒

                                    </button>

                                `

                                : ""

                            }


                            ${
                                item.buyPrice

                                ? `

                                    <button
                                        class="buy-btn"
                                        onclick="
                                            event.stopPropagation();
                                            addBuyToCart(
                                                ${categoryIndex},
                                                ${itemIndex}
                                            )
                                        ">

                                        Buy 🛒

                                    </button>

                                `

                                : ""

                            }


                        </div>


                    </div>

                </div>

            </article>

        `;

    }).join("");

}


// =====================================================
// ADD RENT ITEM TO CART
// =====================================================

function addRentToCart(categoryIndex, itemIndex, option = null) {

    const item = gear[categoryIndex].items[itemIndex];

    let price;
    let cartName = item.name;


    // 4 PERSON TENT
    if (
        item.name === "4 Person Tent (Automatic / Manual)" &&
        option
    ) {

        price = item.rentPrice[option];

        cartName =
            `${item.name} - ${option.charAt(0).toUpperCase() + option.slice(1)}`;

    }


    // NORMAL ITEM
    else {

        price = item.rentPrice;

    }


    const existingItem = cart.find(

        cartItem =>

            cartItem.name === cartName &&

            cartItem.type === "Rent"

    );


    if (existingItem) {

        existingItem.quantity++;

    }

    else {

        cart.push({

            name: cartName,

            price: price,

            type: "Rent",

            quantity: 1

        });

    }


    updateCart();


    alert(`${cartName} added to Rent Cart`);

}


// =====================================================
// ADD BUY ITEM TO CART
// =====================================================

function addBuyToCart(categoryIndex, itemIndex, option = null) {

    const item = gear[categoryIndex].items[itemIndex];

    let price;
    let cartName = item.name;


    // LEECH REPELLENT SPRAY
    if (
        item.name === "Leech Repellent Spray" &&
        option
    ) {

        price = item.buyPrice[option];

        cartName =
            `${item.name} - ${option}`;

    }


    // 4 PERSON TENT
    else if (
        item.name === "4 Person Tent (Automatic / Manual)" &&
        option
    ) {

        price = item.buyPrice[option];

        cartName =
            `${item.name} - ${option.charAt(0).toUpperCase() + option.slice(1)}`;

    }


    // NORMAL ITEM
    else {

        price = item.buyPrice;

    }


    const existingItem = cart.find(

        cartItem =>

            cartItem.name === cartName &&

            cartItem.type === "Buy"

    );


    if (existingItem) {

        existingItem.quantity++;

    }

    else {

        cart.push({

            name: cartName,

            price: price,

            type: "Buy",

            quantity: 1

        });

    }


    updateCart();


    alert(`${cartName} added to Buy Cart`);

}


// =====================================================
// UPDATE CART COUNT
// =====================================================

function updateCart() {

    const cartCount =
        document.getElementById("cartCountFloat");


    const totalItems = cart.reduce(

        (total, item) =>

            total + item.quantity,

        0

    );


    if (cartCount) {

        cartCount.textContent = totalItems;

    }


    renderCart();

}


// =====================================================
// OPEN CART DRAWER
// =====================================================

function openCartDrawer() {

    const drawer =
        document.getElementById("cartDrawer");

    const overlay =
        document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.add("open");

    }


    if (overlay) {

        overlay.classList.add("open");

    }


    renderCart();

}


// =====================================================
// CLOSE CART DRAWER
// =====================================================

function closeCartDrawer() {

    const drawer =
        document.getElementById("cartDrawer");

    const overlay =
        document.getElementById("cartOverlay");


    if (drawer) {

        drawer.classList.remove("open");

    }


    if (overlay) {

        overlay.classList.remove("open");

    }

}


// =====================================================
// RENDER CART ITEMS
// =====================================================

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cartTotal");


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h3>Your cart is empty 🛒</h3>

                <p>
                    Add some camping gear to your cart.
                </p>

            </div>

        `;


        if (cartTotal) {

            cartTotal.textContent =
                "Rs. 0";

        }


        return;

    }


    cartItems.innerHTML = cart.map(

        (item, index) => `

            <div class="cart-item">

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>


                    <small>
                        ${item.type}
                    </small>


                    <p>
                        Rs. ${item.price.toLocaleString()}
                    </p>

                </div>


                <div class="cart-item-actions">

                    <button
                        onclick="decreaseQuantity(${index})">

                        −

                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        onclick="increaseQuantity(${index})">

                        +

                    </button>


                    <button
                        class="remove-cart-item"
                        onclick="removeFromCart(${index})">

                        🗑️

                    </button>

                </div>

            </div>

        `

    ).join("");


    const total = cart.reduce(

        (sum, item) =>

            sum + (item.price * item.quantity),

        0

    );


    if (cartTotal) {

        cartTotal.textContent =
            `Rs. ${total.toLocaleString()}`;

    }

}


// =====================================================
// INCREASE QUANTITY
// =====================================================

function increaseQuantity(index) {

    if (!cart[index]) return;


    cart[index].quantity++;


    updateCart();

}


// =====================================================
// DECREASE QUANTITY
// =====================================================

function decreaseQuantity(index) {

    if (!cart[index]) return;


    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    }

    else {

        cart.splice(index, 1);

    }


    updateCart();

}


// =====================================================
// REMOVE ITEM
// =====================================================

function removeFromCart(index) {

    if (!cart[index]) return;


    cart.splice(index, 1);


    updateCart();

}


// =====================================================
// CART ICON CLICK
// =====================================================

const cartButton =
    document.querySelector(".cart-icon");


if (cartButton) {

    cartButton.addEventListener(

        "click",

        event => {

            event.preventDefault();

            openCartDrawer();

        }

    );

}


// =====================================================
// CART CLOSE BUTTON
// =====================================================

const cartClose =
    document.getElementById("closeCart");


if (cartClose) {

    cartClose.addEventListener(

        "click",

        closeCartDrawer

    );

}


// =====================================================
// CART OVERLAY CLICK
// =====================================================

const cartOverlay =
    document.getElementById("cartOverlay");


if (cartOverlay) {

    cartOverlay.addEventListener(

        "click",

        closeCartDrawer

    );

}


// =====================================================
// BOOKING MODAL
// =====================================================

function openBooking(name, price) {

    if (!modal) return;


    modalTitle.textContent =
        name;


    modalPrice.textContent =

        `${price} per day · Submit a request and our team will confirm availability.`;


    modal.classList.add("show");

}


const closeModal =
    document.getElementById("closeModal");


if (closeModal) {

    closeModal.onclick = () => {

        modal.classList.remove("show");

    };

}


if (modal) {

    modal.onclick = event => {


        if (
            event.target === modal
        ) {

            modal.classList.remove("show");

        }

    };

}


// =====================================================
// BOOKING FORM
// =====================================================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(

        "submit",

        event => {


            event.preventDefault();


            alert(

                "Booking request received! Peak.lk will contact you soon."

            );


            modal.classList.remove("show");


            event.target.reset();

        }

    );

}


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(

        "submit",

        event => {


            event.preventDefault();


            alert(

                "Thanks! Your enquiry has been sent to Peak.lk."

            );


            event.target.reset();

        }

    );

}


// =====================================================
// FILTER BUTTONS
// =====================================================

document
    .querySelectorAll(".filter")
    .forEach(btn => {

        btn.onclick = () => {


            document
                .querySelectorAll(".filter")
                .forEach(button =>

                    button.classList.remove("active")

                );


            btn.classList.add("active");


            renderGear(

                btn.dataset.filter

            );

        };

    });


// =====================================================
// ORDER VIA WHATSAPP
// =====================================================

function orderViaWhatsApp() {


    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    let message =
        "🏕️ *Peak-LK Order Request*\n\n";


    let total = 0;


    cart.forEach(item => {


        const price =
            item.price;


        const qty =
            item.quantity;


        const subtotal =
            price * qty;


        total += subtotal;


        message +=

            `📦 ${item.name}\n` +

            `📌 Type: ${item.type}\n` +

            `🔢 Qty: ${qty}\n` +

            `💰 Price: Rs. ${price.toLocaleString()}\n` +

            `🧾 Sub Total: Rs. ${subtotal.toLocaleString()}\n\n`;

    });


    message +=
        `💵 *Total: Rs. ${total.toLocaleString()}*`;


    window.open(

        `https://wa.me/94706811482?text=${encodeURIComponent(message)}`,

        "_blank"

    );

}


// =====================================================
// MOBILE MENU
// =====================================================

const menuButton =
    document.querySelector(".menu-btn");


if (menuButton) {

    menuButton.onclick = () => {


        const nav =
            document.querySelector("nav");


        nav.style.display =

            nav.style.display === "flex"

            ? "none"

            : "flex";


        nav.style.position =
            "absolute";


        nav.style.top =
            "78px";


        nav.style.left =
            "0";


        nav.style.right =
            "0";


        nav.style.background =
            "#17221c";


        nav.style.padding =
            "24px";


        nav.style.flexDirection =
            "column";

    };

}