import { useParams, useLocation } from "react-router-dom";

const Article = () => {
  const { article } = useParams();
  const location = useLocation();
  const { author } = location.state || {}; // استخراج بيانات المؤلف

  const headingStyle = "mb-4 font-sans text-body-l";
  const paragraphStyle = "mb-8 font-serif text-body-s";
  return (
    <div>
      <div className="mx-auto max-w-[1216px]">
        {/* Main Content */}
        <main className="p-6">
          <div className="mt-[16px] h-[200px] rounded-md p-2">
            {/* title */}
            <div className="inline-flex h-[28px] w-auto items-center justify-center rounded-[6px] bg-bright-blue p-[4px_10px_4px_10px] text-heading-s text-white">
              {article}
            </div>

            {/* Text shortcut */}
            <div className="mt-4 line-clamp-2 text-body-xl leading-10">
              The Impact of Technology on the Workplace: How Technology is
              Changing The Impact of Technology on the Workplace: How Technology
              is Changing
            </div>

            {/* Author */}
            <div className="flex items-center pt-5">
              <img
                className="h-7 w-7 rounded-full shadow-md"
                src="https://fakeimg.pl/100x100/000000?text=%F0%9F%99%82&font_size=60"
                alt="Photo Author"
              />

              <p className="pl-3 text-heading-s text-soft-gray">
                {author || "Unknown Author"}
              </p>

              <p className="text-heading-ss pl-5 text-soft-gray">
                Nov 17, 2022
              </p>
            </div>
          </div>
          {/* Image */}
          <img
            src="https://fakeimg.pl/800x462/dcdcdc?font=bebas"
            alt="Cityscape"
            className="mb-6 w-full rounded-lg"
          />

          {/* Article Content */}
          <section>
            <p className={paragraphStyle}>
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
              <br /> <br /> One of the most rewarding aspects of traveling is
              immersing yourself in the local culture and customs. This includes
              trying local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
            <h2 className={headingStyle}>Research Your Destination</h2>
            <p className={paragraphStyle}>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>

            <h2 className={headingStyle}>Plan Your Itinerary</h2>
            <p className={paragraphStyle}>
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
              <br /> <br />
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>

            {/* Quote */}
            <blockquote className="text-body-ls bg-mid-white my-8 rounded-[12px] border-l-4 border-custom-gray p-8 font-serif italic text-midnight-blue">
              "Traveling can expose you to new environments and potential health
              risks, so it’s crucial to take precautions to stay safe and
              healthy."
            </blockquote>

            {/* Secondary Image */}
            <img
              src="https://fakeimg.pl/800x462/dcdcdc?font=bebas"
              alt="Traveler"
              className="mb-6 w-full rounded-lg"
            />

            <h2 className={headingStyle}>Pack Lightly and Smartly</h2>
            <p className={paragraphStyle}>
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </p>

            <h2 className={headingStyle}>Stay Safe and Healthy</h2>
            <p className={paragraphStyle}>
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </p>

            <h2 className={headingStyle}>
              Immerse Yourself in the Local Culture
            </h2>
            <p className={paragraphStyle}>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>

            <h2 className={headingStyle}>Capture Memories</h2>
            <p className={paragraphStyle}>
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </p>

            <h2 className={headingStyle}>Conclusion:</h2>
            <p className={paragraphStyle}>
              Traveling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and tricks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Article;
