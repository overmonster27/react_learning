import {useForm} from "react-hook-form";
import {creatUser} from "../../services";

const Users = () => {

    let {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                username: 'username',
                email: 'overmonster@ukr.net'
            }
        }
    );
    let submit = (object) => {
        creatUser(object);
        console.log(object);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} {...register('name', {required: true})}/>
                <input type={"text"} {...register('username', {required: true})}/>
                <input type={"text"} {...register('email', {required: true})}/>
                <input type='submit'/>
                {errors.name && <span>Reqiered field</span>}
            </form>
        </div>
    );
};

export {Users};