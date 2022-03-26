import React from "react";

const Question = () => {
  return (
    <div className="container mt-4  p-3 rounded-3 shadow-lg ">
      <div>
        <h3 className="text-center text-decoration-underline">
          {" "}
          How React Works.{" "}
        </h3>
        <p>
          {" "}
          বর্তমান সময়ে রিয়েক্ট জেএস অনেক পপুলার জাভাস্ক্রিপ্ট ফ্রোন্ট এন্ড
          লাইব্রেরী । রিয়েক্ট জেএস ব্যাবহার করে অল্প সময়ে অনেক সুন্দর সুন্দর
          ওয়েবসাইট বানানো যায়। রিয়েক্ট জেএস ফেইসবুকের একজন Software Engineer
          তৈরি করেন । রিয়েক্ট জেএস এ সবকিছুই একটা Component হিসেবে বিবেচনা করা
          হয়। একটা Component এর ভিতরে অনেক গুলো Component থাকতে পারে, আর এই
          Component ফাইনালি একটা JSX এলিমেন্ট রিটার্ন করে, JSX এর ফুল মিনিং হলো
          JavaScript XML , JSX দেখতে HTML এর মতো হলেও JSX এর ভিতরে Curly Bracket
          ব্যাবহার করলে জাভাস্ক্রিপ্ট কোডও লিখা যায়। পিসিতে React App ব্যাবহার
          করতে চাইলে npx create-react-app এই কমান্ডটি চালিয়ে React App নামাতে
          হবে এবং ব্রাউজারে আউটপুট দেখতে হলে npm start দিতে হবে।{" "}
        </p>
      </div>

      <div className="">
        <h3 className="text-center text-decoration-underline">
          {" "}
          How Use State Works.{" "}
        </h3>
        <p>
          {" "}
          রিয়েক্ট জেএস এ দুইভাবে Component বানানো যায়, ১। Class Component এবং
          ২। Functional Component। অনেক সময় আমাদের Functional Component এ কিছু
          আপডেট করতে হয়। Functional Component কে আপডেট করার জন্য React আমাদের
          কিছু Hooks দেই, Use State হলো একটা Hooks. Use State ব্যাবহার করার নিয়ম
          হলো প্রথমে React থেকে import করতে হয়, এবং const
          [something,setSomething] = useState(something); এইভাবে লিখতে হয়।
          বামপাশে Array এর মতো করে Destructuring করতে হয় এবং যা করতে চায় তা
          লিখতে হয় এবং ডান পাশে Use State লিখতে হয়, বামপাশের প্রথম Index এ value
          পাই এবং দ্বিতীয় index এ একটা function পাই , সেই Function  প্রথম
          index এর value সেট এবং আপডেট করে ।।
        </p>
      </div>
    </div>
  );
};

export default Question;
