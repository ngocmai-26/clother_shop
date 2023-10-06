
import iconSuccess from "../../../asset/images/verify.png";

function SuccessRegister() {
  
  return (
    <div className="container ">
      <div className="grid grid-cols-6 gap-4  py-4 ">
        <div className="col-start-3 col-span-2 p-3 my-10 pt-15">
          <h2 className="text-3xl">Sign in</h2>
          <p className="text-base py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="order-detail text-center ">
            <img src={iconSuccess} alt="" className="mx-auto" />
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="text-center pt-4">
              <a href="">Back to login</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessRegister;
