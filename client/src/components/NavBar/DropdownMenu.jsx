/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/firebase/context";
>>>>>>> f1344cd456b1e54cd54c1614139eb6bb606bbaf1

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownMenu() {
  const { user, logout, loading } = useAuth();

  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
  //localStorage.setItem('userID',JSON.stringify(user?.reloadUserInfo?.localId));
  const navigate = useNavigate();

  //apparently its not logging out
  const handleLogout = async () => {
    try {
      await logout().then(() => {
        localStorage.removeItem("userLogged");
        navigate("./Login");
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <h2>Loading</h2>;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* still patching here, apparently it works */}
            {/*             it should not let you sign in if you're already signed in
             */}{" "}
            {!userLogged && (
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="./Login"
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "px-4 py-2 text-sm flex items-center"
                      )}
                    >
                      <i className="material-icons">person_pin</i>
                      Sign In
                    </Link>
                  )}
                </Menu.Item>
                
              </div>
            )}
            {!userLogged?.id && (
              <div>
            <Menu.Item>
              {({ active }) => (
                <Link
<<<<<<< HEAD
                  to="./Login"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "px-4 py-2 text-sm flex items-center"
                  )}
                >
                  <i className="material-icons">person_pin</i>
                  Sign In
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="./register"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex px-4 py-2 text-sm items-center"
                  )}
                >
=======
                  to="./register"
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex px-4 py-2 text-sm items-center"
                  )}
                >
>>>>>>> f1344cd456b1e54cd54c1614139eb6bb606bbaf1
                  <i className="material-icons">person_add</i>
                  Register
                </Link>
              )}
            </Menu.Item>
<<<<<<< HEAD
            <form>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "w-full px-4 py-2 text-left text-sm items-center flex"
                    )}
                  >
                    <i className="material-icons">exit_to_app</i>
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
=======
            </div>
              )}
            {/* added option to only logout if not logged in. If something crashes in ddm its here */}
            {userLogged?.id && (
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "w-full px-4 py-2 text-left text-sm items-center flex"
                      )}
                    >
                      <i className="material-icons">exit_to_app</i>
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            )}
>>>>>>> f1344cd456b1e54cd54c1614139eb6bb606bbaf1
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
