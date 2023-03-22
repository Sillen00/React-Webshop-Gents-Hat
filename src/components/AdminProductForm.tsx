import { SxProps, TextField, Theme } from "@mui/material";
import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FormContext } from "../contexts/FormContext";

const adminFormSchema = Yup.object().shape({
  productTitle: Yup.string()
    .required("Please tell us your full name.")
    .min(
      5,
      "The name you have given us it too short. Please give us a name of minimum 5 characters."
    ),
  // productImage: Yup.string()
  //   .required("Please tell us your full name.")
  //   .min(
  //     5,
  //     "The name you have given us it too short. Please give us a name of minimum 5 characters."
  //   ),
  // productPrice: Yup.string()
  //   .required("Please tell us your full name.")
  //   .min(
  //     5,
  //     "The name you have given us it too short. Please give us a name of minimum 5 characters."
  //   ),
  // productDescription: Yup.string()
  //   .required("Please tell us your full name.")
  //   .min(
  //     5,
  //     "The name you have given us it too short. Please give us a name of minimum 5 characters."
  //   ),
});

/* ----------------------
         FORMIK
---------------------- */

type adminFormValues = Yup.InferType<typeof adminFormSchema>;

function AdminProductForm() {
  const navigate = useNavigate();
  const { setFormValues } = useContext(FormContext);

  const formik = useFormik<adminFormValues>({
    initialValues: {
      productTitle: "",
    },
    validationSchema: adminFormSchema,
    onSubmit: (values) => {
      setFormValues(values);
      navigate("/confirmation");
    },
  });

  /* ----------------------
       FORM COMPONENT
  ---------------------- */

  return (
    <>
      <TextField
        fullWidth
        id="fullName"
        label="Full name"
        value={formik.values.productTitle}
        onChange={formik.handleChange}
        error={formik.touched.productTitle && Boolean(formik.errors.productTitle)}
        helperText={formik.touched.productTitle && formik.errors.productTitle}
        margin="normal"
      />
    </>
  );
}

const AdminCardListSx: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
});

export default AdminProductForm;
