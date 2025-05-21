import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const { todos, settodos } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState : {errors},
  }=useForm();

  const Submithandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    
    settodos([...todos, data]);
    toast.success('task created');

    reset();
  };
  return (
    <div className="w-[100%] sm:w-[60%] p-10">
      <h1 className="text-6xl sm:text-8xl font-thin mb-15">
        <span className="text-[#ffe6a7]">Schedule</span> Your Tasks
      </h1>
      <form onSubmit={handleSubmit(Submithandler)}>
        <input
          className="w-full border-b text-2xl px-3 py-1 outline-none"
          {...register('title', {
            required: "Title cannot be empty"
          })}
          type="text"
          placeholder="Enter todo-title"
        />
        <small className="text-red-400 text-lg ml-3">{errors?.title?.message}</small>
        <br />  
        <button className="border px-5 py-3 text-xl rounded-xl cursor-pointer active:scale-[0.95] mt-12">
          Create todo
        </button>
      </form>
    </div>
  );
};

export default Create;
