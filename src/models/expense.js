import * as Yup from 'yup';
import { checkFileSize, checkMimeType } from '../utils/file';

const schema = Yup.object().shape({
  expenseTypeCode: Yup.string().required(),
  currencyCode: Yup.string().required(),
  amountSpent: Yup.number().required(),
  amountTotal: Yup.number().required(),
  notes: Yup.string().required(),
  resourceUrl: Yup.mixed()
    .test('fileSize', 'File is too large', checkFileSize)
    .test('fileFormat', 'Unsupported Format', checkMimeType)
    .required(),
  cardDate: Yup.string().required(),
});

export default schema;
