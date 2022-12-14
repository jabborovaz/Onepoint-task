import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function SecondPage() {
  return (
    <div className="px-16 flex flex-col space-y-4 w-full">
      <div className="flex flex-col space-y-1">
        <p className="text-3xl uppercase m-0">Текст</p>
        <p className="text-3xl uppercase m-0">Сообщения</p>
      </div>
      <div className="flex flex-row space-x-6 items-end">
        <div className="w-4/5 scroll-text bg-white rounded-3xl shadow-2xl overflow-y-scroll px-5 pt-4 pb-7">
          <p className="text-direction text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
        </div>
        <Link
          to="/thirdPage"
          className="text-2xl text-white bg-black m-0 p-4 rounded-full"
        >
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default SecondPage;
