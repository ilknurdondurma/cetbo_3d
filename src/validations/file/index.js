import Yup from "..";

export const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    file: Yup.mixed().required('File is required').test('fileType', 'Unsupported File Format', value => {
      if (!value) return true;
      const SUPPORTED_FORMATS = ['image/png', 'image/jpeg', 'image/jpg', 'image/tif', 'application/zip', 'application/x-rar-compressed'];
      return SUPPORTED_FORMATS.includes(value.type);
    }),
    specialRequest: Yup.string(),
    material: Yup.string().required('Material is required'),
    color: Yup.string().required('Color is required'),
    quantity: Yup.number().required('Quantity is required').min(1, 'Quantity must be at least 1')
  });