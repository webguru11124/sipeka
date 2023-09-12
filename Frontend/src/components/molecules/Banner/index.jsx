import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImg from '../../../assets/images/bannerImg.png'
import { ButtonThree } from "../../atoms";
import '../../../shared/Shared.css'

const Banner = () => {
    return (
        <div className="pt-14 parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between dark:bg-boxdark ">
            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-3xl font-semibold text-center mb-0 translate-y-[-30%] sm:translate-y-[-0%] text-primary md:text-left">
                    Sistem Penggajian Karyawan Online
                    <br />PT. Humpuss Karbometil Selulosa</h1>
                <p className="pt-8 text-center max-w-xl mb-6 font-medium translate-y-[-60%] sm:translate-y-[-0%] md:text-left dark:text-white">
                    Sebuah platform perusahaan untuk mengelola
                    proses penggajian karyawan secara efisien dan terintegrasi melalui platform digital.
                </p>

                <div className="grid justify-center sm:flex sm:justify-start translate-y-[-170%] sm:translate-y-[-0%]">
                    <Link to="/login" className="sm:py-0">
                        <ButtonThree>
                            <span>Login</span>
                        </ButtonThree>
                    </Link>
                </div>
            </motion.div>

        </div>
    );
};

export default Banner;
