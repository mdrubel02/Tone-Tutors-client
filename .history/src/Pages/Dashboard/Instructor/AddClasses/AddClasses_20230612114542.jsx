import React from 'react';

const AddClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        useTitle('add my classes')
        const formData = new FormData();
        formData.append('image', data.image[0])

        imageUpload(formData)
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, available_seats, } = data;
                    const newClass = { class_name: name, Instructor_name: user?.displayName, price: parseFloat(price), available_seats: parseFloat(available_seats), image: imgURL, Instructor_email: user?.email, status: 'pending',enrolledStudents: 0}
                    console.log(newClass)
                    axiosSecure.post('/instructor/class', newClass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Store.addNotification({
                                    title: "New class added successfully",
                                    type: "success",
                                    container: 'top-center',
                                    dismiss: {
                                      duration: 3000,
                                      onScreen: true
                                    }
                                  })
                            }
                        })
                }
            })

    };
    return (
        <div className="w-auto px-10">
            <SectionTitle subHeading="What's new" heading="Add an Classes" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" placeholder="Instructor name" value={user?.displayName} readOnly
                            {...register("Instructor_name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available seats*</span>
                    </label>
                    <input type="number" {...register("available_seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="text" placeholder="Instructor name" value={user?.email} readOnly
                            {...register("Instructor_email", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                <input className="btn btn-sm mt-4 text-white bg-primary w-full mb-3" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClasses;