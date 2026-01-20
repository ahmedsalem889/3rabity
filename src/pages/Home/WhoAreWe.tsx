export function WhoAreWe() {
  return (
    <section className="py-12 bg-white" style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="w-full px-4">
        <h2 className="mb-6 font-bold" style={{ fontSize: "2.5rem" }}>
          <span style={{ color: "#c41e3a" }}>Who are we?</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <p className="text-gray-500 mb-3" style={{ fontSize: "1.5rem" }}>
              Arabiity is a team of professionals dedicated to providing reliable and high-quality services. We focus on making your experience smooth, easy, and satisfying.
              Our goal is to help you with practical solutions while ensuring every interaction is simple and enjoyable.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <img
                src="/icons/3rabiity.png"
                alt="3rabiity"
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
