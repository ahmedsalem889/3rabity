export function WhoAreWe() {
  return (
    <section className="py-12 bg-white">
      <div className="w-full px-4">
        <h2 className="mb-6 font-bold" style={{ fontSize: "2rem" }}>
          <span style={{ color: "#c41e3a" }}>Who are we?</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-gray-500 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              velit, cursus vel sem ut, consequat nec aliquam risus. Donec non
              phoreta purus. Vestibulum tincidunt suscipit augue non volutpat.
              Donec justo, finibus ornare et quam ornare, quisquam id convallis.
              Sed at lorem fringilla mollis sodales quam.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src="/icons/3rabiity.png"
                alt="3rabiity"
                className="h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
