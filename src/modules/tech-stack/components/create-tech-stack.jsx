import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiChevronDown } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { setLinkRedirect } from "../../../app/statusReducers";
import { LoadingSmallSize } from "../../../components/loading/loading-small-size";
import { TitlePage } from "../../../components/title-page/title-page";
import { creatTechStack } from "../tech-stack.services";
export const FormCreateTechStack = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.techStack);
  const { link } = useSelector(state => state.techStack);
  const { register: dataForm, handleSubmit } = useForm();
  useEffect(() => {
    dispatch(setLinkRedirect(link));
  }, [link]);
  const onSubmit = async dataNewTechStack => {
    await dispatch(creatTechStack(dataNewTechStack));
  };
  return (
    <div>
      <div className="mt-10">
        <div className="sm:ml-5">
          <TitlePage content="Create Tech Stack" />
        </div>
        <div className="flex justify-center">
          <div className="leading-loose w-6/12 lg:w-full sm:w-full">
            <form
              className=" m-4 p-10 bg-white rounded shadow-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="text-gray-800 font-medium items-center flex mb-5">
                <FcAbout className="text-xl  mr-1" />
                <p> Tech Stack information</p>
              </div>
              <div>
                <label className="block text-sm text-gray-00 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  ref={dataForm}
                  className="w-full px-5 outline-none py-1 text-gray-700 focus:shadow-lg border-gray-500 border rounded"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  ref={dataForm}
                  className="w-full outline-none px-5  py-4 text-gray-700  focus:shadow-lg border-gray-500 border rounded"
                  id="description"
                  name="description"
                  type="text"
                  required
                  placeholder="Description"
                />
              </div>
              <div className="inline-block mt-2 w-full pr-1">
                <label className="text-sm text-gray-600 mb-2" htmlFor="status">
                  Status
                </label>
                <div className="relative ">
                  <select
                    ref={dataForm}
                    className="w-full appearance-none outline-none px-3 py-3 text-gray-700   rounded"
                    id="status"
                    name="status"
                    required
                  >
                    <option className="mt-10" value="active">
                      Active
                    </option>
                    <option value="inactive">Inactive</option>
                  </select>
                  <BiChevronDown className="absolute top-4 text-gray-500 text-2xl right-5" />
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
                <div className="m-3">
                  <button
                    style={{ outline: "none" }}
                    className="bg-white  text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 flex items-center"
                  >
                    {" "}
                    {loading ? (
                      <LoadingSmallSize />
                    ) : (
                      <div className="flex h-10 items-center">
                        <span className="mr-1">Add</span>
                        <BsPlus className="text-xl font-bold " />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
