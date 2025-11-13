    import { motion } from "framer-motion";

    const MagnumIntro = () => {
    return (
        <motion.section
        className="text-center py-20 px-6 bg-gradient-to-b from-[#fffafc] via-[#f9f4ff] to-[#fffafc]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <h1 className="text-4xl md:text-5xl font-bold text-[#3e1f0f] mb-6">
            More is More with <span className="text-[#a35502]">Magnum Ice Cream</span>
        </h1>

        <p className="text-lg text-[#5a3b1c] max-w-3xl mx-auto leading-relaxed mb-4">
            For Magnum ice cream, indulgence has always been at the heart of who we are.
            We encourage you to never minimize your happiness or feel embarrassed for showing
            the world who you truly are and what you truly want.
        </p>

        <p className="text-lg text- max-w-3xl mx-auto leading-relaxed">
            We stand for velvety vanilla ice cream, the most gooey sauces, and cracking chocolate.
            Because when it comes to self-expression, indulgence, and chocolate,
            <span className="text-[#8b4513]  font-semibold"> More is More.</span>
        </p>
        </motion.section>
    );
    };

    export default MagnumIntro;
