import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidded'>
            <div className='w-full flex-none md:w-64'>
                {/* 导入组件，其将成为布局的一部分 */}
                <SideNav />
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
        </div>
    )
}