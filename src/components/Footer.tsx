import nouerLogo from "@/assets/nouer-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "产品",
      links: [
        { label: "White Series", href: "#products" },
        { label: "Black Series", href: "#products" },
        { label: "体验礼盒", href: "#products" },
      ],
    },
    {
      title: "品牌",
      links: [
        { label: "关于我们", href: "#why" },
        { label: "品牌故事", href: "#why" },
        { label: "常见问题", href: "#" },
      ],
    },
    {
      title: "服务",
      links: [
        { label: "配送说明", href: "#" },
        { label: "退换政策", href: "#" },
        { label: "联系客服", href: "#contact" },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={nouerLogo}
              alt="NOU'ER"
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/60 text-sm leading-relaxed max-w-sm">
              提升你每天的潜能
            </p>

          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs tracking-[0.3em] uppercase text-background/40 mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs tracking-wide">
            © {currentYear} NOU'ER. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-background/40 hover:text-background/70 transition-colors text-xs tracking-wide"
            >
              隐私政策
            </a>
            <a
              href="#"
              className="text-background/40 hover:text-background/70 transition-colors text-xs tracking-wide"
            >
              使用条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
