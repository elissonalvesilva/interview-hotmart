import * as Yup from 'yup';
import { checkFileSize, checkMimeType } from '../utils/file';

const schema = Yup.object().shape({
  expenseTypeCode: Yup.string().required('must to select a type'),
  currencyCode: Yup.string().required('must to select a currency'),
  amountSpent: Yup.number()
    .required('must to set a amount spent')
    .typeError('must to be a number'),
  amountTotal: Yup.number()
    .required('must to set a amount total')
    .typeError('must to be a number'),
  notes: Yup.string().required('must to set a title'),
  resourceUrl: Yup.mixed()
    .test('fileSize', 'File is too large', checkFileSize)
    .test('fileFormat', 'Unsupported Format', checkMimeType)
    .required('must to set a file'),
  cardDate: Yup.string().required('must to set a date'),
});

export default schema;
