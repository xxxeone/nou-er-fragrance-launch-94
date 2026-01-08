import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
    const navigate = useNavigate();
    const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

    if (items.length === 0) {
        return (
            <>
                <Helmet>
                    <title>购物车 | NOU'ER</title>
                    <meta name="description" content="您的购物车" />
                </Helmet>

                <div className="min-h-screen bg-background">
                    <Header />
                    <main className="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col items-center justify-center">
                        <ShoppingCart className="w-24 h-24 text-muted-foreground/30 mb-6" />
                        <h1 className="text-3xl font-bold mb-4">购物车为空</h1>
                        <p className="text-muted-foreground mb-8">
                            您的购物车中还没有商品
                        </p>
                        <Button onClick={() => navigate("/")} size="lg">
                            返回首页
                        </Button>
                    </main>
                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>购物车 ({totalItems}) | NOU'ER</title>
                <meta name="description" content="查看您的购物车" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Header />
                <main className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl font-bold mb-8">购物车</h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-card rounded-lg p-6 flex gap-6 border border-border"
                                >
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                        {item.variant && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                {item.variant}
                                            </p>
                                        )}
                                        <p className="text-lg font-bold">¥{item.price}</p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeItem(item.id)}
                                            className="text-destructive hover:text-destructive"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </Button>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </Button>
                                            <span className="w-12 text-center font-semibold">
                                                {item.quantity}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
                                <h2 className="text-2xl font-bold mb-6">订单摘要</h2>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">商品数量</span>
                                        <span className="font-semibold">{totalItems}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">小计</span>
                                        <span className="font-semibold">¥{totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-border pt-4">
                                        <div className="flex justify-between text-lg">
                                            <span className="font-bold">总计</span>
                                            <span className="font-bold">¥{totalPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full" size="lg">
                                    结算
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full mt-3"
                                    onClick={() => navigate("/")}
                                >
                                    继续购物
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Cart;
