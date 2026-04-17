import React from "react";

const menus = [
  {
    id: 1,
    title: "Breakfast Menu",
    img: "/img/home-2/breakfast.png",
    delay: ".3s",
    items: ["Pancakes with Honey", "Scrambled Eggs & Toast", "Fruit Salad with Yogurt", "Oatmeal with Fresh Fruits"],
  },
  {
    id: 2,
    title: "Lunch Menu",
    img: "/img/home-2/lunch.png",
    delay: ".5s",
    items: ["Steamed Rice with Chicken", "Vegetable Khichdi", "Fish & Mixed Vegetables", "Pasta with Tomato Sauce"],
  },
  {
    id: 3,
    title: "Dinner Menu",
    img: "/img/home-2/breakfast.png", // Usando o mesmo do template
    delay: ".7s",
    items: ["Chicken Soup with Bread", "Fried Rice with Vegetables", "Roti & Mixed Vegetable", "Noodles Egg & Veggies"],
  },
];

export default function FoodKidsSection() {
  return (
    <section className="footer-kids-section section-padding bg-cover fix" style={{ backgroundImage: "url('/img/home-2/food-kids-bg.png')" }}>
      <div className="food-shape1 float-bob-y">
        <img src="/img/home-2/food-shape.png" alt="img" />
      </div>
      <div className="food-shape2 float-bob-x">
        <img src="/img/home-2/food-shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span className="sec-sub tz-sub-tilte tz-sub-anim tx-subTitle">Our Foods For Kids</span>
            <h2 className="tx-title sec_title tz-itm-title tz-itm-anim">What Do We Feed</h2>
          </div>
          <div className="client-sub">
            <img src="/img/home-2/hero-client.png" alt="img" />
            <span>
              student’s admission <br />
              in 2026
            </span>
          </div>
        </div>
        <div className="row">
          {menus.map((menu) => (
            <div key={menu.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={menu.delay}>
              <div className="footer-kids-box-items">
                <div className="bg-thumb">
                  <img src="/img/home-2/food-kids-items.png" alt="img" />
                  <div className="food-img">
                    <img src={menu.img} alt="img" />
                  </div>
                </div>
                <div className="content">
                  <div className="icon">
                    <img src={`/img/home-2/icon/icon${menu.id}.svg`} alt="img" />
                  </div>
                  <h3 className="title">{menu.title}</h3>
                  <ul>
                    {menu.items.map((item, idx) => (
                      <li key={idx}>
                        <img src="/img/home-2/icon/check2.svg" alt="img" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
