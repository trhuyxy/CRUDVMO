import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loading } from "../../../components/loading/loading";
import { getDetailsCustomers } from "../customers.services";
import { FormDetailCustomers } from "./form-detail-customers";
import { FormEditCustomers } from "./form-edit-customers";
export const DetailsCustomers = () => {
  const [editStatus, setEditStatus] = useState(false);
  const [update, setUpdate] = useState(false);
  const params = useParams();
  const { dataDetails } = useSelector(state => state.customers);
  const { loading: loadingCustomers } = useSelector(state => state.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsCustomers(params.id));
  }, [update]);
  return (
    <div>
      <div>
        {loadingCustomers ? (
          <Loading />
        ) : (
          <div>
            {editStatus ? (
              <FormEditCustomers
                setUpdate={setUpdate}
                dataDetails={dataDetails}
                setEdit={setEditStatus}
                update={update}
              />
            ) : (
              <FormDetailCustomers setUpdate={setEditStatus} dataDetails={dataDetails} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
