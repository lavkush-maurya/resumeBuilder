const Card = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Custom cards</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-vector/minimalist-cv-template_23-2148916066.jpg?w=740&t=st=1674197658~exp=1674198258~hmac=0ee32040c95724ca3fea81264298c82a23ea7240a4ed44b33cb5fec13eaec24a)',
              backgroundSize: "100% 100%",
              height: "150%",
            }}
          >
            <div className="d-flex flex-column  p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Easy to edit here
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/modern-cv-template-concept_52683-39274.jpg?w=740&t=st=1674198357~exp=1674198957~hmac=2439a4b201af8d18a1c65d56a697ffb8e8dfa2d69d46d7d6c6c51f3bcfb74225)",
              backgroundSize: "100% 100%",
              height: "150%",
            }}
          >
            <div className="d-flex flex-column  p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Free to use here
              </h3>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-vector/concept-searching-professional-worker-read-summary-vector-illustration_580339-636.jpg?w=740)",
              backgroundSize: "100% 100%",
              height: "150%",
            }}
          >
            <div className="d-flex flex-column  p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Smart object use
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
