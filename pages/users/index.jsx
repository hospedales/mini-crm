import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';

import Link from 'next/link';
import { userService } from '../../services/user.service';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <Layout>
            <Head>
                <title>User Management</title>
            </Head>
            <section className="container mx-auto text-center min-h-screen">
            <h1 className="font-bold text-4xl mt-20">User Management</h1>
            <br />
            <Link href="/users/add"><button className="py-1 px-2 mb-8 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Add User</button></Link>
            {users && users.map(user =>
                <div className="py-8 px-8 mb-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                    className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={user.profile} alt="Profile"/>
                    <div className="text-center space-y-2 sm:text-left" key={user.id}>
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                {user.firstName} {user.lastName}
                            </p>
                            <p className="text-gray-600 font-medium">
                                {user.street}<br />
                                {user.city}, {user.state}
                            </p>
                            <p className="text-green-500 font-medium">
                                {user.email}
                            </p>
                            <p className="text-gray-500 font-medium">
                                {user.password}
                            </p>
                        </div>
                        <Link href={`/users/edit/${encodeURI(user.id)}`}>
                            <button className="px-4 py-1 mt-1 mr-1 text-sm text-white bg-yellow-400 font-semibold rounded-full border border-yellow-200 hover:text-white hover:bg-yellow-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
                        </Link>
                        <button onClick={() => deleteUser(user.id)} className="px-4 py-1 mt-1 ml-1 text-sm text-white bg-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete</button>
                    </div>
                </div>
            )}
            {!users &&
                <div className="py-8 px-8 mb-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="spinner-border spinner-border-lg align-center"></div>
                    </div>
                </div>
            }
            {users && !users.length &&
                <div className="py-8 px-8 mb-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="p-2">No Users To Display</div>
                    </div>
                </div>
            }
        </section>
        </Layout>
        

    );
}