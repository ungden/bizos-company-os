# BIZOS — Business Operating System

> 🇬🇧 **EN** · Company OS: **Task → personal KPI → team KPI → company KPI → Financials.**
> A Next.js + Supabase business-operating system — 19 production-grade screens, KPI cascade, compensation rule engine, P&L/BS/CF, what-if Forecast, OKRs, Audit, SOPs.
>
> 🇻🇳 **VI** · Hệ thống vận hành công ty: **Task → KPI cá nhân → KPI phòng ban → KPI công ty → Tài chính.**
>
> **Live demo:** [bizos-company-os.vercel.app](https://bizos-company-os.vercel.app) — browse all 19 screens in Demo mode even without Supabase. Toggle **VI / EN** from the top bar.
>
> 📘 **Guide / Hướng dẫn:** [/guide](https://bizos-company-os.vercel.app/guide) — full walkthrough of all 19 screens + 3 end-to-end workflows + tips.

by [**Alex Le**](mailto:alexle@titanlabs.vn) · `alexle@titanlabs.vn`
Donate: [PayPal — sai211dn@gmail.com](https://www.paypal.com/paypalme/sai211dn)
Need a custom deployment? Email `alexle@titanlabs.vn` (VN/EN welcomed).

---

## 🖼 19 màn hình — xem tất cả

<table>
<tr>
<td width="50%"><b>01 · Dashboard tổng quan</b><br/><img src="mockups/01-dashboard-tong-quan.png" alt="Dashboard" /></td>
<td width="50%"><b>02 · Sơ đồ tổ chức</b><br/><img src="mockups/02-so-do-to-chuc.png" alt="Org chart" /></td>
</tr>
<tr>
<td><b>03 · Phòng ban</b><br/><img src="mockups/03-phong-ban.png" alt="Department" /></td>
<td><b>04 · Hồ sơ nhân sự</b><br/><img src="mockups/04-ho-so-nhan-su.png" alt="Employee profile" /></td>
</tr>
<tr>
<td><b>05 · KPI Tree</b><br/><img src="mockups/05-kpi-tree.png" alt="KPI Tree" /></td>
<td><b>06 · Operations / Task board</b><br/><img src="mockups/06-operations.png" alt="Operations" /></td>
</tr>
<tr>
<td><b>07 · Lương thưởng</b><br/><img src="mockups/07-luong-thuong.png" alt="Compensation" /></td>
<td><b>08 · Dự án</b><br/><img src="mockups/08-du-an.png" alt="Projects" /></td>
</tr>
<tr>
<td><b>09 · Tài chính (P&L / BS / Cash flow)</b><br/><img src="mockups/09-tai-chinh.png" alt="Finance" /></td>
<td><b>10 · Cài đặt</b><br/><img src="mockups/10-cai-dat.png" alt="Settings" /></td>
</tr>
<tr>
<td><b>11 · Report Center</b><br/><img src="mockups/11-report-center.png" alt="Reports" /></td>
<td><b>12 · Alerts Center</b><br/><img src="mockups/12-alerts-center.png" alt="Alerts" /></td>
</tr>
<tr>
<td><b>13 · Approval Center</b><br/><img src="mockups/13-approval-center.png" alt="Approvals" /></td>
<td><b>14 · Audit Log</b><br/><img src="mockups/14-audit-log.png" alt="Audit" /></td>
</tr>
<tr>
<td><b>15 · Mục tiêu chiến lược (OKR)</b><br/><img src="mockups/15-goal-okr-planning.png" alt="OKR" /></td>
<td><b>16 · Forecast / Mô phỏng</b><br/><img src="mockups/16-forecast-mo-phong.png" alt="Forecast" /></td>
</tr>
<tr>
<td><b>17 · Tuyển dụng & Năng lực</b><br/><img src="mockups/17-tuyen-dung-va-nang-luc.png" alt="Recruiting" /></td>
<td><b>18 · Knowledge / SOP / Playbook</b><br/><img src="mockups/18-knowledge-sop-playbook.png" alt="Knowledge" /></td>
</tr>
<tr>
<td colspan="2" align="center"><b>19 · Tài khoản cá nhân</b><br/><img src="mockups/19-tai-khoan-ca-nhan.png" alt="Profile" width="50%" /></td>
</tr>
</table>

---

## ⚡ Chuỗi logic cốt lõi

```
Task hằng ngày
  → Output cá nhân
    → KPI cá nhân
      → KPI team / phòng ban
        → KPI công ty
          → Doanh thu / Chi phí / Lợi nhuận / Dòng tiền
```

Mỗi bước đều truy vết được. Đổi 1 KPI lá ở **Forecast** sẽ thấy tác động lên Net Profit ngay lập tức.

## 🧱 Stack

- **Next.js 16** (App Router · Server Components · Server Actions) + TypeScript
- **Tailwind CSS v4** + UI primitives (shadcn-style) + `lucide-react`
- **Recharts** (line · bar · donut · sparkline) + **reactflow** (Org chart, KPI tree)
- **Supabase** (Postgres · Auth · Storage · RLS) qua `@supabase/ssr`
- React Hook Form + Zod · TanStack Table
- Deploy: **Vercel** hoặc **Railway** (Dockerfile), Supabase managed cloud

## 📖 Hướng dẫn sử dụng nhanh

### Cho CEO / Founder

1. Mở **[/dashboard](https://bizos-company-os.vercel.app/dashboard)** mỗi sáng — 30 giây hiểu công ty đang như thế nào.
2. KPI đỏ trên **[/kpi](https://bizos-company-os.vercel.app/kpi)** → click vào từng KPI xem ai owner + actual data source.
3. Vào **[/forecast](https://bizos-company-os.vercel.app/forecast)** chạy what-if: _"Nếu Sales hụt 20% thì Net Profit còn bao nhiêu?"_
4. **[/approvals](https://bizos-company-os.vercel.app/approvals)** duyệt bonus / ngân sách / tuyển dụng.

### Cho HR Admin

1. **[/people](https://bizos-company-os.vercel.app/people)** quản lý directory nhân sự.
2. **[/compensation](https://bizos-company-os.vercel.app/compensation)** chạy payroll, xem Incentive Simulator.
3. **[/recruiting](https://bizos-company-os.vercel.app/recruiting)** theo dõi pipeline ứng viên + skill gap.

### Cho Department Head

1. **[/departments/:id](https://bizos-company-os.vercel.app/departments)** xem KPI phòng + task + ngân sách.
2. **[/operations](https://bizos-company-os.vercel.app/operations)** giao task, gắn `linked_kpi_id`.
3. **[/okr](https://bizos-company-os.vercel.app/okr)** cascade mục tiêu quý xuống team.

### Quy trình end-to-end

```
Task (/operations) → KPI cá nhân (/people/:id)
  → KPI phòng ban (/departments/:id)
    → KPI công ty (/kpi)
      → Payroll (/compensation, chạy rule engine)
        → Tài chính (/finance: P&L · BS · CF)
          → Forecast what-if (/forecast)
```

➡️ **Xem chi tiết từng màn hình + 3 workflow đầy đủ tại [/guide](https://bizos-company-os.vercel.app/guide).**

## 🚀 Chạy local

```bash
pnpm install
cp .env.example .env.local   # điền Supabase URL + keys nếu chạy live
DEMO_MODE=true pnpm dev      # hoặc bật demo mode khi chưa có Supabase
```

Mở http://localhost:3000 — redirect sang `/login`. Nếu chưa cấu hình Supabase, hãy bật `DEMO_MODE=true` để duyệt đủ 19 trang bằng data mẫu.

## 🗄 Thiết lập Supabase

1. Tạo project tại https://app.supabase.com.
2. Vào **SQL Editor**, chạy lần lượt:
   - [`db/schema.sql`](db/schema.sql) — 40+ bảng + enums + triggers
   - [`db/policies.sql`](db/policies.sql) — RLS cho 7 role
   - [`db/seed.sql`](db/seed.sql) — BIZOS Demo company + KPI cascade
3. **Authentication → Users → Add user** tạo `ceo@bizos.demo`, `hr@bizos.demo`, `cfo@bizos.demo`, `sales.head@bizos.demo`.
4. Lấy `auth.users.id` và chạy:
   ```sql
   update employees set auth_user_id = '<auth-id>' where email = 'ceo@bizos.demo';
   insert into user_roles (auth_user_id, company_id, role)
   values ('<ceo-auth-id>', '00000000-0000-0000-0000-00000000c001', 'ceo');
   ```
5. Copy `anon` + `service_role` key từ **Project Settings → API** vào `.env.local`.

## ☁️ Deploy

### Option A — Vercel (khuyến nghị cho Next.js)

1. Push repo lên GitHub.
2. Trên https://vercel.com → **Add New → Project** → chọn repo.
3. Vercel tự nhận `vercel.json` + framework Next.js. Repo này mặc định deploy ở **demo mode** trên Vercel.
4. Nếu muốn nối live data, thêm env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_APP_URL`.
5. Deploy — healthcheck tại `/api/health`.

### Option B — Railway (Docker)

1. Trên https://railway.app → **New → Deploy from GitHub repo**.
2. Railway tự nhận `Dockerfile` + `railway.json`.
3. Thêm env vars như Vercel.

## 🧠 Engine nội bộ

- **`lib/kpi/formulaEngine.ts`** — evaluator JSONB AST (sum · sub · mul · avg · weighted_avg · ratio · milestone · ref · const · manual).
- **`lib/kpi/cascade.ts`** — `buildKpiRows`, `buildKpiTree`, `simulateImpact` (propagate delta KPI lá → gốc).
- **`lib/compensation/ruleEngine.ts`** — `computePayroll()` với 5-tier threshold + team + company multiplier.
- **`lib/queries/index.ts`** — unified fetcher tự fallback demo khi không có Supabase.

## 📁 Cấu trúc

```
app/
  (auth)/            login · signup · reset-password · Server Actions
  (app)/             shell có Sidebar + Topbar + Footer + 19 màn hình
  api/health         healthcheck
components/
  ui/                button · card · input · badge · label · separator · tabs
  layout/            Sidebar · Topbar · PageHeader · Footer
  charts/            AreaTrend · BarCompare · DonutStat · MiniSpark
  kpi/               KpiCard · KpiHeroDonut · KpiStatusBadge · KpiTreeGraph
  widgets/           ProgressList · ActivityFeed · MiniCalendar · StatChip · InsightCard
  org/               OrgGraph (reactflow)
  tables/            DataTable
  forecast/          Simulator (client, slider)
  compensation/      IncentiveSimulator
lib/
  supabase/          client.ts · server.ts · proxy.ts
  utils/             cn · formatVND · formatPercent · formatDateVN
  queries/           index.ts · demo.ts (14 employees, 14 KPIs, payroll, accounting, ...)
  kpi/               formulaEngine · cascade
  compensation/      ruleEngine
  nav.ts             19 menu items
db/
  schema.sql         40+ bảng (organization · KPI · operations · compensation · projects · finance · OKR · recruiting · knowledge · governance)
  policies.sql       RLS cho 7 role
  seed.sql           BIZOS Demo
mockups/             19 hình PNG thiết kế gốc
proxy.ts             root-level (Next 16 đổi tên middleware → proxy)
Dockerfile · railway.json · vercel.json    deploy configs
```

## 🛣 Lộ trình

| Phase | Scope | Trạng thái |
|---|---|---|
| **0** | Bootstrap, shell, 19 page scaffold, schema + RLS + seed | ✅ |
| **1** | Org · Department · People CRUD | ✅ (demo data, thêm CRUD khi Supabase live) |
| **2** | KPI formula engine + OKR + cascade + integrity checker | ✅ |
| **3** | Operations — task board, SLA, task-to-KPI mapping | ✅ |
| **4** | Compensation — rule engine + payroll + simulator | ✅ |
| **5** | Projects — milestones + ROI | ✅ |
| **6** | Finance — P&L / BS / CF / Budget / Cost center | ✅ |
| **7** | Dashboard intelligence + Forecast simulator | ✅ |
| **8** | Reports + Alerts + Approvals + Audit Log | ✅ |
| **9** | Recruiting + SOP / Knowledge | ✅ |
| **10** | Polish + Vercel production deploy | ✅ |

## 📝 License

Proprietary — **Alex Le · Titan Labs**. Xem code thoải mái, fork để học. Deploy production / tuỳ biến cho công ty → email `alexle@titanlabs.vn`.
