import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProductImage from "@/assets/producto.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
            {
                label: "Reports",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Customers",
        links: [
            {
                label: "Customers",
                icon: Users,
                path: "/customers",
            },
            {
                label: "New customer",
                icon: UserPlus,
                path: "/new-customer",
            },
            {
                label: "Verified customers",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "New product",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Inventory",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Ene",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Abr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Ago",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dic",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        total: 1500,
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        total: 2000,
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        total: 4000,
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        total: 3000,
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        total: 2500,
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        total: 5300,
    },
];

export const topProducts = [
    {
        number: 1,
        name: "COLNAGO V3Rs",
        image: ProductImage,
        description: "Bicicleta tope de gama para ciclismo de carretera.",
        price: 7599.00,
        status: "Últimas unidades",
        rating: 4.5,
    },
    {
        number: 2,
        name: "Colnago C64",
        image: ProductImage,
        description: "BICICLETA DE CARRETERA DE ALTO RENDIMIENTO HECHA A MANO.",
        price: 7989.99,
        status: "En stock",
        rating: 4.7,
    },
    {
        number: 3,
        name: "COLNAGO YR3",
        image: ProductImage,
        description: "Bicicleta de ruta escaladora",
        price: 8299.99,
        status: "En Stock",
        rating: 4.8,
    },
    {
        number: 4,
        name: "COLNAGO YTE",
        image: ProductImage,
        description: "La bicicleta chrono tope de gama",
        price: 199.99,
        status: "No disponible",
        rating: 4.4,
    },
    {
        number: 5,
        name: "CANNYON AEROAD CF SLX",
        image: ProductImage,
        description: "Bicicleta de carretera aerodinámica de alto rendimiento.",
        price: 5999.99,
        status: "No disponible",
        rating: 4.3,
    },
    {
        number: 6,
        name: "CANNYON ULTIMATE CF SL",
        image: ProductImage,
        description: "Bicicleta de carretera ligera y versátil para escaladas.",
        price: 6999.99,
        status: "En stock",
        rating: 4.6,
    },
    {
        number: 7,
        name: "CANNYON GRIZL CF SL",
        image: ProductImage,
        description: "LA bicicleta gravel de aventura con gran capacidad de carga.",
        price: 5599.99,
        status: "En stock",
        rating: 4.7,
    },
    {
        number: 8,
        name: "S-WORKS ROLLER|",
        image: ProductImage,
        description: "Bicicleta chrono de alto rendimiento para contrarreloj y triatlón.",
        price: 7999.99,
        status: "En Stock",
        rating: 4.5,
    },
    {
        number: 9,
        name: "S-WORKS ACTION",
        image: ProductImage,
        description: "La bicicleta de ruta definitiva para ciclistas que buscan velocidad.",
        price: 8499.99,
        status: "Últimas unidades",
        rating: 4.8,
    },
    {
        number: 10,
        name: "S-WORKS TARMAC SL7",
        image: ProductImage,
        description: "La gravel de alto rendimiento para aventuras todoterreno.",
        price: 7555.99,
        status: "Sin stock",
        rating: 4.5,
    },
];
