import Image from "next/image";

const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];

const CustomCake = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl pb-8 px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div>
              <Image
                className="rounded-md"
                src="/custom-cake.jpg"
                alt=""
                width={600}
                height={300}
              />

              <div className="absolute" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16"
                aria-hidden="true"
              >
                <div className="w-[68.5625rem]" />
              </div>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h3 className="mt-2 text-3xl playfair-display tracking-tight text-gray-900 sm:text-4xl">
                Custom Cake Design
              </h3>
              <div className="max-w-xl">
                <p className="mt-6 text-[1rem] montserrat-light">
                  Celebrate life's sweetest moments with a custom cake from
                  Sugar Spoon Bakery. Whether you're marking a milestone
                  birthday, commemorating a special anniversary, or simply
                  indulging in a well-deserved treat, our custom cakes are the
                  perfect way to add a touch of sweetness to any occasion. With
                  their impeccable craftsmanship, exquisite flavors, and
                  personalized designs, our custom cakes are sure to leave a
                  lasting impression and create memories that will be cherished
                  for years to come.
                </p>

                <br />

                <h2 className="montserrat-bold text-accent">
                  Your Vision, Our Expertise
                </h2>
                <p className="mt-4 text-[1rem] montserrat-light">
                  At Sugar Spoon Bakery, we believe that every cake should be as
                  unique as the person it's made for. That's why we work closely
                  with each of our customers to bring their vision to life, from
                  concept to creation. Whether you have a specific theme in
                  mind, a favorite flavor combination, or a special design
                  request, our talented team of bakers and decorators will work
                  tirelessly to ensure that your custom cake exceeds your
                  expectations and reflects your individual style and taste.
                </p>

                <br />

                <h2 className="montserrat-bold text-accent">
                  Order Your Custom Cake Today
                </h2>
                <p className="mt-4 text-[1rem] montserrat-light">
                  Ready to make your cake dreams a reality? Contact us today to
                  schedule your consultation and begin the journey to your
                  perfect custom cake. Whether you're celebrating a wedding, a
                  birthday, a baby shower, or any other special occasion, our
                  custom cakes are the perfect way to add a touch of sweetness
                  and sophistication to your event. Order your custom cake from
                  Sugar Spoon Bakery today and let us help you create memories
                  that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCake;
