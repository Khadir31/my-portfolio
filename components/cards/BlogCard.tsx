interface BlogCardProps {
  title: string;
  date: string;
  description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-small text-default-500 text-left font-bold text-lg">
      September 16, 2024
      </p>
      <p className="text-xl lg:text-2xl md:text-lg text-left font-bold">
      My Journey into Web Development
      </p>
      <p className="text-md lg:text-xl md:text-lg text-left"> Sharing my experience of learning frontend and backend technologies, working on exciting projects, and building a strong portfolio.</p>
    </div>
  );
};

export default BlogCard;
