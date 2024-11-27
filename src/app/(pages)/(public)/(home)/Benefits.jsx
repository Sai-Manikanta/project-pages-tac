
const Benefits = ({ benefits }) => {
  return (
    <section className="lg:py-24 py-16">
      <div className="container">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
          Services / Products
          </span>
          <h1 className="text-3xl/tight font-medium mt-3 mb-4">
          What We Do
          </h1>
          <p className="text-gray-500 text-left">TACTIC Resource addresses the challenges of production cost tracking and planning in VFX, animation, and game studios. It offers a comprehensive, centralized platform for decision-makers to manage production complexities confidently. Featuring advanced financial reporting, role planning, crew planning, and project timeline management tools, TACTIC Resource provides a streamlined solution that consolidates data from all production roles and departments. This empowers studio executives, crew members, and schedulers with accurate, up-to-date information for enhanced coordination and decision-making.</p>
        </div>
        <div className="mt-14">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {(benefits ?? []).map((benefit, idx) => {
              return (
                <div key={idx}>
                  <div
                    className="flex gap-6 items-center"
                    data-aos="fade-up"
                    data-aos-duration={300}
                  >
                    <div>
                      <span className="h-16 w-16 bg-primary/10 rounded-md flex items-center justify-center">
                        {benefit.icon}
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-2 font-medium">{benefit.title}</h6>
                      <p className="text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
