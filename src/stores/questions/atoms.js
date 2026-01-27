import { atom } from 'recoil';

const questionState = atom({
  key: 'questionState',
  default: [
    {
      title: '질문 1 입니다.',
      desc: '설명1 입니다.',
      type: 'text',
      required: false,
      options: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문 2 입니다.',
      desc: '설명2 입니다.',
      type: 'textarea',
      required: false,
      options: { placeholder: 'placeholder 입니다.' },
    },
    {
      title: '질문 3 입니다.',
      desc: '설명3 입니다.',
      type: 'select',
      required: false,
      options: { items: ['답변1', '답변2'] },
    },
  ],
});

export default questionState;
