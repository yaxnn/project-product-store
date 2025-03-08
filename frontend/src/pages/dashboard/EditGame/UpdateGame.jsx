import React, { useEffect } from "react";
import InputField from "../addGame/InputField";
import SelectField from "../addGame/SelectField";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import axios from "axios";
import getBaseUrl from "../../../utils/baseURL";
import { useFetchGameByIdQuery, useUpdateGameMutation } from "../../../redux/features/games/gamesApi";

const UpdateGame = () => {
  const { id } = useParams();
  const {
    data: gameData,
    isLoading,
    isError,
    refetch,
  } = useFetchGameByIdQuery(id);
  // console.log(gameData)
  const [updateGame] = useUpdateGameMutation();
  const { register, handleSubmit, setValue, reset } = useForm();
  useEffect(() => {
    if (gameData) {
      setValue("title", gameData.title);
      setValue("description", gameData.description);
      setValue("category", gameData?.category);
      setValue("trending", gameData.trending);
      setValue("oldPrice", gameData.oldPrice);
      setValue("newPrice", gameData.newPrice);
      setValue("coverImage", gameData.coverImage);
    }
  }, [gameData, setValue]);

  const onSubmit = async (data) => {
    const updateGameData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || gameData.coverImage,
    };
    try {
      await axios.put(`${getBaseUrl()}/api/games/edit/${id}`, updateGameData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Swal.fire({
        title: "Game Updated",
        text: "Your game is updated successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!",
      });
      await refetch();
    } catch (error) {
      console.log("Failed to update game.");
      alert("Failed to update game.");
    }
  };
  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching game data</div>;
  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Game</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter game title"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter game description"
          type="textarea"
          register={register}
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'Action', label: 'Action' },
            { value: 'Adventure', label: 'Adventure' },
            { value: 'Sports & Racing', label: 'Sports & Racing' },
            { value: 'horror', label: 'Horror' },
            { value: 'Strategy', label: 'Strategy' },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("trending")}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Trending
            </span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        />

        <InputField
          label="Cover Image URL"
          name="coverImage"
          type="text"
          placeholder="Cover Image URL"
          register={register}
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
        >
          Update Game
        </button>
      </form>
    </div>
  );
};

export default UpdateGame;
