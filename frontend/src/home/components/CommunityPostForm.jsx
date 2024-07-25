import { useForm } from "react-hook-form";
import { fetchCreateCommunityPost } from "../helpers/api";
import { toast } from "react-toastify";

export const CommunityPostForm = ({community_id}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetchCreateCommunityPost(data, community_id);
    console.log(response);
    toast.success("¡Post creado correctamente!");
  });
  return (
    <>
      <div id="post-modal-data" className="card">
        <div className="card-header d-flex justify-content-between">
          <div className="header-title">
            <h4 className="card-title">Create Post</h4>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="user-img">
              <img
                src="../images/home/user/yo.jpg"
                alt="userimg"
                className="avatar-60 rounded-circle"
              />
            </div>
            <form
              className="post-text ms-3 w-100 "
              data-bs-toggle="modal"
              data-bs-target="#post-modal"
            >
              <input
                type="text"
                className="form-control rounded"
                placeholder="Write something here..."
                style={{ border: "none" }}
              />
            </form>
          </div>
          <hr />
         
        </div>
        <div
          className="modal fade"
          id="post-modal"
          tabIndex="-1"
          aria-labelledby="post-modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog   modal-fullscreen-sm-down">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="post-modalLabel">
                  Create Post
                </h5>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  <i className="ri-close-fill"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <div className="user-img">
                    <img
                      src="../images/home/user/yo.jpg"
                      alt="userimg"
                      className="avatar-60 rounded-circle img-fluid"
                    />
                  </div>
                  <form
                    onSubmit={onSubmit}
                    className="post-text ms-3 w-100"
                    action=""
                  >
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="Write something here..."
                      style={{ border: "none" }}
                      {...register("descripcion", { required: true })}
                    />
                    {errors.descripcion && (
                      <span className="text-danger">
                        Descripción es requerido.
                      </span>
                    )}
                    <button
                      type="submit"
                      className="btn btn-primary d-block w-100 mt-3"
                    >
                      Publicar
                    </button>
                  </form>
                </div>
                <hr />
               
                <hr />
                <div className="other-option">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
