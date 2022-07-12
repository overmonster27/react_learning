import {useForm} from "react-hook-form";
import {creatComment} from "../../services";

const Comments = () => {

    let {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                field: 'field',
                email: 'overmonster@ukr.net'
            }
        }
    );
    let submit = (object) => {
        creatComment(object);
        console.log(object);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} {...register('name', {required: true})}/>
                {errors.name && <span>Reqiered field</span>}
                <input type={"text"} {...register('field')}/>
                <input type={"text"} {...register('email')}/>
                <input type='submit'/>
            </form>
        </div>
    );
};

export {Comments};