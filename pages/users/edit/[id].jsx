import { AddEdit } from '../../../components/users/AddEdit';
import { userService } from '../../../services/user.service';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}