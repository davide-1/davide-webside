import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        {/* lorem50 */}
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non amet
          adipisci blanditiis dolor quasi enim deleniti, impedit sed? Beatae,
          odio tempore? Illo, ad saepe doloribus laboriosam, totam corrupti
          asperiores eveniet quia at similique earum quis natus, ea quas nam
          praesentium? Sint harum ea voluptate quam aliquam, quae culpa nihil
          tempore!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis,
          pariatur ipsam minima vero iure reprehenderit sequi laboriosam, nam
          consequatur mollitia nesciunt nobis incidunt hic veritatis in
          consectetur voluptatem. Mollitia alias labore repellendus velit
          quaerat inventore voluptates nam veritatis vitae officiis consequatur
          autem beatae laborum dolorum, pariatur corrupti amet soluta?
        </p>
      </div>
    </div>
  );
}
