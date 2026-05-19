const home_sect3 = [
    {
        img: "../Assets/Image.png", name: "Seaside Serenity Villa", desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <span>Read More</span>",
        bed: "4-Bedroom", bath: "3-Bathroom", villa: "Villa"
    },
    {
        img: "../Assets/Image2.png", name: "Metropolitan Haven", desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views... <span>Read More</span>",
        bed: "2-Bedroom", bath: "2-Bathroom", villa: "Villa"
    },
    {
        img: "../Assets/Image (1).png", name: "Rustic Retreat Cottage", desc: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... <span>Read More</span>",
        bed: "3-Bedroom", bath: "3-Bathroom", villa: "Villa"
    },
]

const cards3 = document.getElementById('cards3');
if (cards3) {
    const cards34 = home_sect3.slice(0, 3);
    cards3.innerHTML = cards34.map(
        item => `<div class="card3">
        <img src="${item.img}" alt="">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="category3">
            <div>
                <img src="../Assets/BACKGROUND_2.png" alt="">
                <h4>${item.bed}</h4>
            </div>
            <div>
                <img src="../Assets/BACKGROUND_2 (2).png" alt="">
                <h4>${item.bath}</h4>
            </div>
            <div>
                <img src="../Assets/Subtract.png" alt="">
                <h4>${item.villa}</h4>
            </div>
        </div>
        <div class="but3">
            <div>
                <p>Price</p>
                <h3>$500,000</h3>
            </div>
            <button><a href="../Property_Details/property_details.html">View Property Details</a></button>
        </div>   
    </div>`
    ).join('')
}

const home_sect4 = [
    {
        img: "../Assets/Container11.png", name: "Exceptional Service!", desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        icon: "../Assets/Profile.png", nam: "Wade Warren", country: "USA, California"
    },
    {
        img: "../Assets/Container11.png", name: "Efficient and Reliable", desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
        icon: "../Assets/Profile (1).png", nam: "Emelie Thomson", country: "USA, Florida"
    },
    {
        img: "../Assets/Container11.png", name: "Trusted Advisors", desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
        icon: "../Assets/Profile (2).png", nam: "John Mans", country: "USA, Nevada"
    },
]

const cards4 = document.getElementById('cards4');
if (cards4) {
    const cards44 = home_sect4.slice(0, 3);
    cards4.innerHTML = cards44.map(
        item => `<div class="card4">
        <img src="${item.img}" alt="">
        <h4>${item.name}</h4>
        <h5>${item.desc}</h5>
        <div class="human">
            <img src="${item.icon}" alt="">
            <div>
                <h5>${item.nam}</h5>
                <p>${item.country}</p>
            </div>
        </div>  
    </div>`
    ).join('')
}

const home_sect5 = [
    {
        name: "How do I search for properties on Estatein?", desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
        name: "What documents do I need to sell my property through Estatein?", desc: "Find out about the necessary documentation for listing your property with us.",
    },
    {
        name: "How can I contact an Estatein agent?", desc: "Discover the different ways you can get in touch with our experienced agents.",
    },
]

const cards5 = document.getElementById('cards5');
if (cards5) {
    const cards54 = home_sect5.slice(0, 3);
    cards5.innerHTML = cards54.map(
        item => `<div class="card5">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <button>Read More</button>
    </div>`
    ).join('')
}


const properties_sect2 = [
    {
        img2: "../Assets/Image.png", name2: "Seaside Serenity Villa", desc: "Wake up to the soothing melody of waves. This beachfront villa offers... <span>Read More</span>",
        price: "$1,250,000", abo: "Coastal Escapes - Where Waves Beckon"
    },
    {
        img2: "../Assets/Image2.png", name2: "Metropolitan Haven", desc: "Immerse yourself in the energy of the city. This modern apartment in the heart... <span>Read More</span>",
        price: "$650,000", abo: "Urban Oasis - Life in the Heart of the City"
    },
    {
        img2: "../Assets/Image (1).png", name2: "Rustic Retreat Cottage", desc: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills... <span>Read More</span>",
        price: "$350,000", abo: "Countryside Charm - Escape to Nature's Embrace"
    },
]

const cards2 = document.getElementById('cards2');
if (cards2) {
    const cards24 = properties_sect2.slice(0, 3);
    cards2.innerHTML = cards24.map(
        item => `<div class="card2">
        <img src="${item.img2}" alt="">
        <div class="carddiv2"><span>${item.abo}</span></div>
        <h3>${item.name2}</h3>
        <p>${item.desc}</p>
        <div class="but3">
            <div>
                <p>Price</p>
                <h3>${item.price}</h3>
            </div>
            <button><a href="../Property_Details/property_details.html">View Property Details</a></button>
        </div>   
    </div>`
    ).join('')
}




const aboutus_sect5 = [
    {
        img: "../Assets/m51.png", name: "Max Mitchell", desc: "Founder"
    },
    {
        img: "../Assets/m52.png", name: "Sarah Johnson", desc: "Chief Real Estate Officer"
    },
    {
        img: "../Assets/m53.png", name: "David Brown", desc: "Head of Property Management"
    },
    {
        img: "../Assets/m54.png", name: "Michael Turner", desc: "Legal Counsel",
    }
]

const cards1 = document.getElementById('cards1');
if (cards1) {
    const cards14 = aboutus_sect5.slice(0, 4);
    cards1.innerHTML = cards14.map(
        item => `<div class="card1">
                <div>
                    <img src="${item.img}" alt="">
                    <img class="img5" src="../Assets/Button5.png" alt="">
                </div>
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <div class="hello5">
                    <span>Say Hello 👋</span>
                    <button><img src="../Assets/Icon.png" alt=""></button>
                </div>
            </div>`
    ).join('')
}

const aboutus_sect4 = [
    {
        step: "Step 01", name: "Discover a World of Possibilities", desc: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
    },
    {
        step: "Step 02", name: "Narrowing Down Your Choices", desc: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
    },
    {
        step: "Step 03", name: "Personalized Guidance", desc: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
    },
    {
        step: "Step 04", name: "See It for Yourself", desc: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
        step: "Step 05", name: "Making Informed Decisions", desc: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
    },
    {
        step: "Step 06", name: "Getting the Best Deal", desc: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    }
]

const topc4 = document.getElementById('topc4');
const botc4 = document.getElementById('botc4');
if (topc4, botc4) {
    const cards04 = aboutus_sect4.slice(0, 3);
    const cards05 = aboutus_sect4.slice(3, 6);
    topc4.innerHTML = cards04.map(
        item => `<div>
                <div class="line4"></div>
                <h5>${item.step}</h5>
                <div class="card4">
                    <div></div>
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>`
    ).join('');
    botc4.innerHTML = cards05.map(
        item => `<div>
                <div class="line4"></div>
                <h5>${item.step}</h5>
                <div class="card4">
                    <div></div>
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>`
    ).join('')
}


const services_sect3 = [
    {
        img: "../Assets/s11.png", name: "Valuation Mastery", desc: "Discover the true worth of your property with our expert valuation services."
    },
    {
        img: "../Assets/s22.png", name: "Strategic Marketing", desc: "Selling a property requires more than just a listing; it demands a strategic marketing approach."
    },
    {
        img: "../Assets/s33.png", name: "Negotiation Wizardry", desc: "Negotiating the best deal is an art, and our negotiation experts are masters of it."
    },
    {
        img: "../Assets/s44.png", name: "Closing Success", desc: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    }
]

const tops3 = document.getElementById('tops3');
const bots3 = document.getElementById('bots3');
if (tops3 && bots3) {
    const cards64 = services_sect3.slice(0, 3);
    const cards65 = services_sect3.slice(3, 4);
    tops3.innerHTML = cards64.map(
        item => `<div class="card6">
            <div>
                <img src="${item.img}" alt="">
                <h5>${item.name}</h5>
            </div>
            <p>${item.desc}</p>
        </div>`
    ).join('');
    bots3.innerHTML = cards65.map(
        item => `<div class="card6">
            <div>
                <img src="${item.img}" alt="">
                <h5>${item.name}</h5>
            </div>
            <p>${item.desc}</p>
        </div>
        <div class="dugi6">
                <div>
                    <h3>Unlock the Value of Your Property Today</h3>
                    <button>Learn More</button>
                </div>
                <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
            </div>`
    ).join('')
}




const services_sect4 = [
    {
        img: "../Assets/s77.png", name: "Tenant Harmony", desc: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
    },
    {
        img: "../Assets/s8.png", name: "Maintenance Ease", desc: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
    },
    {
        img: "../Assets/s9.png", name: "Financial Peace of Mind", desc: "Managing property finances can be complex. Our financial experts take care of rent collection"
    },
    {
        img: "../Assets/Icon Container (3).png", name: "Legal Guardian", desc: "Stay compliant with property laws and regulations effortlessly.",
    }
]

const tops4 = document.getElementById('tops4');
const bots4 = document.getElementById('bots4');
if (tops4 && bots4) {
    const cards74 = services_sect4.slice(0, 3);
    const cards75 = services_sect4.slice(3, 4);
    tops4.innerHTML = cards74.map(
        item => `<div class="card7">
            <div>
                <img src="${item.img}" alt="">
                <h5>${item.name}</h5>
            </div>
            <p>${item.desc}</p>
        </div>`
    ).join('');
    bots4.innerHTML = cards75.map(
        item => `<div class="card7">
            <div>
                <img src="${item.img}" alt="">
                <h5>${item.name}</h5>
            </div>
            <p>${item.desc}</p>
        </div>
        <div class="dugi6">
                <div>
                    <h3>Unlock the Value of Your Property Today</h3>
                    <button>Learn More</button>
                </div>
                <p>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
            </div>`
    ).join('')
}

const services_sect5 = [
    {
        img: "../Assets/s11.png", name: "Market Insight", desc: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
    },
    {
        img: "../Assets/s55.png", name: "ROI Assessment", desc: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
    },
    {
        img: "../Assets/s66.png", name: "Customized Strategies", desc: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
    },
    {
        img: "../Assets/Icon Container (3).png", name: "Diversification Mastery", desc: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    }
]

const tops5 = document.getElementById('tops5');
const bots5 = document.getElementById('bots5');
if (tops5 && bots5) {
    const cards84 = services_sect5.slice(0, 2);
    const cards85 = services_sect5.slice(2, 4);
    tops5.innerHTML = cards84.map(
        item => `<div class="card8">
            <div>
                <img src="${item.img}" alt="">
                <h5>${item.name}</h5>
            </div>
            <p>${item.desc}</p>
        </div>`
    ).join('');
    bots5.innerHTML = cards85.map(
        item => `<div class="card8">
            <div>
                <img src="${item.img}" alt="">
                <h5>${item.name}</h5>
            </div>
            <p>${item.desc}</p>
        </div>`
    ).join('')
}

const contactus_sect4 = [
    {
        head: "Main Headquarters", name: "123 Estatein Plaza, City Center, Metropolis", desc: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.", 
        mail:"info@estatein.com", phone:"+1 (123) 456-7890", loc:"Metropolis"
    },
    {
        head: "Regional Offices", name: "456 Urban Avenue, Downtown District, Metropolis", desc: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        mail:"info@restatein.com", phone:"+1 (123) 628-7890", loc:"Metropolis"
    }
]

const card444 = document.getElementById('card444');
if (card444) {
    const cards94 = contactus_sect4.slice(0, 2);
    card444.innerHTML = cards94.map(
        item => `<div class="card441">
                <p><span>${item.head}</span></p>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="card442">
                    <div>
                        <img src="../Assets/c334.png" alt="">
                        <p><span>${item.mail}</span></p>
                    </div>
                    <div>
                        <img src="../Assets/c333.png" alt="">
                        <p><span>${item.phone}</span></p>
                    </div>
                    <div>
                        <img src="../Assets/loc.png" alt="">
                        <p><span>${item.loc}</span></p>
                    </div>
                </div>
                <button>Get Direction</button>
            </div>`
    ).join('')
}

const contactus_sect5 = [
    {
        img1: "../Assets/l1.png", img2: "../Assets/l2.png", img3: "../Assets/l3.png", img4: "../Assets/l4.png", img5: "../Assets/l5.png", img6: "../Assets/l6.png",
    },
]

const card555 = document.getElementById('card555');
if (card555) {
    const cards95 = contactus_sect5.slice(0, 1);
    card555.innerHTML = cards95.map(
        item => `<div class="card551">
            <div class="top5">
                <img src="${item.img1}" alt="">
                <img src="${item.img2}" alt="">
            </div>
            <div class="center5">
                <img src="${item.img3}" alt="">
                <div class="cho">
                    <img src="${item.img4}" alt="">
                    <img src="${item.img5}" alt="">
                </div>
            </div>
            <div class="bot5">
                <div class="text3">
                    <img class="star" src="../Assets/Abstract Design.png" alt="">
                    <h1>Explore Estatein's World</h1>
                    <p>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets
                        passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know
                        us better.</p>
                </div>
                <img src="${item.img6}" alt="">
            </div>
        </div>`
    ).join('')
}